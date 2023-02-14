import { Injectable, NotFoundException, InternalServerErrorException, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { HelperServices } from 'src/common/helpers/handled-error.helper';
import { ValorParametro } from 'src/valor-parametro/entities/valor-parametro.entity';
import { Repository } from 'typeorm';
import { CreateParametroDto } from './dto/create-parametro.dto';
import { UpdateParametroDto } from './dto/update-parametro.dto';
import { Parametro } from './entities/parametro.entity';

@Injectable()
export class ParametrosService {
  private readonly logger = new Logger('ParametrosService')
  private readonly HelperServices = new HelperServices('ParametrosService')

  constructor(
    @InjectRepository(Parametro)
    private readonly parametroRepository: Repository<Parametro>,
    @InjectRepository(ValorParametro)
    private readonly valorParametroRepository: Repository<ValorParametro>
  ) { }
  async create({ valoresParametro, ...createParametroInput }: CreateParametroDto): Promise<Parametro> {

    try {
      const newParametro = this.parametroRepository.create({
        ...createParametroInput,
        valoresParametros: valoresParametro?.map((valorParametro) => this.valorParametroRepository.create({ nombre: valorParametro }))
      })

      await this.parametroRepository.save(newParametro)

      return newParametro;
    } catch (error) {
      this.HelperServices.handleDbExceptions(error)
    }
  }

  async findAll(paginationArgs: PaginationDto) {
    try {
      const { limit, offset } = paginationArgs;
      const parametros = await this.parametroRepository.find({
        take: limit,
        skip: offset,
        where: {
          status: 'active'
        }
      });
      // const parametrosAll = parametros.map(parametro => {
      //   return { ...parametro, valoresParametros: [] }
      // })
      return parametros;

    } catch (error) {
      this.HelperServices.handleDbExceptions(error);
    }
  }

  async findOne(term: string): Promise<Parametro> {
    try {
      let parametro: Parametro;

      if (isUUID(term)) {
        parametro = await this.parametroRepository.findOne({
          relations: {
            valoresParametros: false
          },
          where: {
            id: term
          }
        });
      } else {
        const queryBuilderParametro = this.parametroRepository.createQueryBuilder('parm')
        parametro = await queryBuilderParametro
          .where('UPPER(parm.nombre) =:nombre', {
            nombre: term.toUpperCase(),
          })
          .leftJoinAndSelect('parm.valoresParametros', 'valorP')
          .getOne();
        //TODO: DEVOLVER VALORES PARAMETRO O NO DEPENDIENDO PETICION DE CLIENTE
        // const queryBuilderValorParametro = this.valorParametroRepository.createQueryBuilder('vparm')
        // const valorParametro = await queryBuilderValorParametro
        //   .where('vparm.parametroId =:idParametro', {
        //     idParametro: parametro.id
        //   })
        //   .getMany();
        // parametro.valoresParametros = valorParametro
      }

      if (!parametro) throw new NotFoundException('No se encontraron resultados');

      return parametro;
    } catch (error) {
      this.HelperServices.handleDbExceptions(error)
    }

  }

  async update(id: string, { valoresParametro, ...updateParametroInput }: UpdateParametroDto) {
    try {
      const parametro = await this.parametroRepository.preload({ id, ...updateParametroInput })

      if (!parametro) throw new NotFoundException(`Parametro with id ${id} not found`)
      if (valoresParametro.length > 0) {
        parametro.valoresParametros = [...parametro.valoresParametros, ...valoresParametro.map((valorParametro) => this.valorParametroRepository.create({ nombre: valorParametro }))]
      }
      const parametroUpdate = await this.parametroRepository.save(parametro);
      return parametroUpdate;
    } catch (error) {
      this.HelperServices.handleDbExceptions(error)
    }
  }

  async remove(id: string) {
    try {
      const parametro = await this.findOne(id);

      await this.parametroRepository.remove(parametro)
      parametro.id = id
      return parametro;
    } catch (error) {
      this.HelperServices.handleDbExceptions(error)
    }
  }

  async inactive(id: string) {
    try {
      //TODO: INACTIVE VALORES-PARAMETRO WHEN PARAMETRO IS INACTIVE
      const parametro = await this.findOne(id);
      parametro.status = 'inactive';
      await this.parametroRepository.save(parametro)
      return parametro;
    } catch (error) {
      this.HelperServices.handleDbExceptions(error)
    }
  }
  async active(id: string) {
    try {
      //TODO: ACTIVE VALORES-PARAMETRO WHEN PARAMETRO IS ACTIVE
      const parametro = await this.findOne(id);
      parametro.status = 'active';
      await this.parametroRepository.save(parametro)
      return parametro;
    } catch (error) {
      this.HelperServices.handleDbExceptions(error)
    }
  }

}
