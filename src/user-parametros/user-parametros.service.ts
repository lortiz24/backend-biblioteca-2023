import { Injectable } from '@nestjs/common';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateUserParametroDto } from './dto/create-user-parametro.dto';
import { UpdateUserParametroDto } from './dto/update-user-parametro.dto';

@Injectable()
export class UserParametrosService {
  create(createUserParametroDto: CreateUserParametroDto) {
    return 'This action adds a new userParametro';
  }

  findAll(paginationDto: PaginationDto) {
    return `This action returns all userParametros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userParametro`;
  }

  update(id: number, updateUserParametroDto: UpdateUserParametroDto) {
    return `This action updates a #${id} userParametro`;
  }

  remove(id: number) {
    return `This action removes a #${id} userParametro`;
  }
}
