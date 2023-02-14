import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { ValorParametroService } from './valor-parametro.service';
import { CreateValorParametroDto } from './dto/create-valor-parametro.dto';
import { UpdateValorParametroDto } from './dto/update-valor-parametro.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ParametrosService } from 'src/parametros/parametros.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ValorParametro')
@Controller('valor-parametro')
export class ValorParametroController {
  constructor(
    private readonly valorParametroService: ValorParametroService,
    private readonly parametroService: ParametrosService
  ) { }

  @Post()
  async create(
    @Body() createValorParametroDto: CreateValorParametroDto,
    @Param('parametroId', ParseUUIDPipe) parametroId: string
  ) {
    const parametro = await this.parametroService.findOne(parametroId)
    return this.valorParametroService.create(parametro, createValorParametroDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.valorParametroService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.valorParametroService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateValorParametroDto: UpdateValorParametroDto) {
    return this.valorParametroService.update(id, updateValorParametroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.valorParametroService.remove(id);
  }
}
