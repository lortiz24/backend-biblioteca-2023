import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserParametrosService } from './user-parametros.service';
import { CreateUserParametroDto } from './dto/create-user-parametro.dto';
import { UpdateUserParametroDto } from './dto/update-user-parametro.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ApiResponse } from '@nestjs/swagger';
import { UserParametro } from './entities/user-parametro.entity';

@Controller('user-parametros')
export class UserParametrosController {
  constructor(private readonly userParametrosService: UserParametrosService) { }


  @ApiResponse({ status: 201, description: 'The user param was created succesfully', type: UserParametro })
  @ApiResponse({ status: 400, description: 'BadRequest' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Post()
  create(@Body() createUserParametroDto: CreateUserParametroDto) {
    return this.userParametrosService.create(createUserParametroDto);
  }

  @ApiResponse({ status: 200, description: 'The user params found correctly', type: [UserParametro] })
  @ApiResponse({ status: 400, description: 'BadRequest' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Get()
  findAll(
    @Query() paginationDto: PaginationDto
  ) {
    return this.userParametrosService.findAll(paginationDto);
  }


  @ApiResponse({ status: 200, description: 'Parameter found correctly', type: UserParametro })
  @ApiResponse({ status: 400, description: 'BadRequest' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userParametrosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserParametroDto: UpdateUserParametroDto) {
    return this.userParametrosService.update(+id, updateUserParametroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userParametrosService.remove(+id);
  }
}
