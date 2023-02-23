import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { ParametrosService } from './parametros.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateParametroDto } from './dto/create-parametro.dto';
import { UpdateParametroDto } from './dto/update-parametro.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { Parametro } from './entities/parametro.entity';

@ApiTags('Parametro')
@Controller('parametros')
export class ParametrosController {
  constructor(
    private readonly parametrosService: ParametrosService
  ) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Parametro was created successfully', type: Parametro })
  @ApiResponse({ status: 400, description: 'BadRequest' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  create(
    @Body() createParametroDto: CreateParametroDto
  ) {
    return this.parametrosService.create(createParametroDto);
  }

  @ApiResponse({ status: 200, description: 'Parameters found correctly', type: [Parametro] })
  @ApiResponse({ status: 400, description: 'BadRequest' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Get()
  findAll(
    @Query() paginationDto: PaginationDto,
  ) {
    return this.parametrosService.findAll(paginationDto);
  }


  @ApiResponse({ status: 200, description: 'Parameter found correctly', type: Parametro })
  @ApiResponse({ status: 400, description: 'BadRequest' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    return this.parametrosService.findOne(id);
  }

  @ApiResponse({ status: 200, description: 'Parameter update correctly', type: Parametro })
  @ApiResponse({ status: 400, description: 'BadRequest' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateParametroDto: UpdateParametroDto) {
    return this.parametrosService.update(id, updateParametroDto);
  }

  @ApiResponse({ status: 200, description: 'Parameter remove correctly', type: Parametro })
  @ApiResponse({ status: 400, description: 'BadRequest' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Delete(':id')
  remove(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    return this.parametrosService.remove(id);
  }

  @ApiResponse({ status: 200, description: 'Parameter inactive correctly', type: Parametro })
  @ApiResponse({ status: 400, description: 'BadRequest' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Patch('/inactive/:id')
  inactive(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    return this.parametrosService.inactive(id);
  }

  @ApiResponse({ status: 200, description: 'Parameter active correctly', type: Parametro })
  @ApiResponse({ status: 400, description: 'BadRequest' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Patch('/active/:id')
  active(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    return this.parametrosService.active(id);
  }
}
