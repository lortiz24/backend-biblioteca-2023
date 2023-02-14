import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { ParametrosService } from './parametros.service';
import { CreateParametroDto } from './dto/create-parametro.dto';
import { UpdateParametroDto } from './dto/update-parametro.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('parametros')
export class ParametrosController {
  constructor(
    private readonly parametrosService: ParametrosService
  ) { }

  @Post()
  create(
    @Body() createParametroDto: CreateParametroDto
  ) {
    return this.parametrosService.create(createParametroDto);
  }

  @Get()
  findAll(
    @Query() paginationDto: PaginationDto,
  ) {
    return this.parametrosService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string
  ) {
    return this.parametrosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateParametroDto: UpdateParametroDto) {
    return this.parametrosService.update(id, updateParametroDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string
  ) {
    return this.parametrosService.remove(id);
  }
  @Patch('/inactive/:id')
  inactive(
    @Param('id') id: string
  ) {
    return this.parametrosService.inactive(id);
  }
  @Patch('/active/:id')
  active(
    @Param('id') id: string
  ) {
    return this.parametrosService.active(id);
  }
}
