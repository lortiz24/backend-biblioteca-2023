import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { ValorParametroService } from './valor-parametro.service';
import { CreateValorParametroDto } from './dto/create-valor-parametro.dto';
import { UpdateValorParametroDto } from './dto/update-valor-parametro.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ParametrosService } from 'src/parametros/parametros.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ValorParametro } from './entities/valor-parametro.entity';

//todo: realizar documentacion con swagger
@ApiTags('ValorParametro')
@Controller('valor-parametro')
export class ValorParametroController {
  //todo: cambio pendiente del parametrosServices
  constructor(
    private readonly valorParametroService: ValorParametroService,
    private readonly parametroService: ParametrosService
  ) { }

  @ApiResponse({ status: 201, description: 'Parametro was created successfully', type: ValorParametro })
  @ApiResponse({ status: 400, description: 'BadRequest' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @Post(':parametroId')
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




  @ApiResponse({ status: 200, description: 'Parameter inactive correctly', type: ValorParametro })
  @ApiResponse({ status: 400, description: 'BadRequest' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Patch('/inactive/:id')
  inactive(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    return this.valorParametroService.inactive(id);
  }

  @ApiResponse({ status: 200, description: 'Parameter active correctly', type: ValorParametro })
  @ApiResponse({ status: 400, description: 'BadRequest' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Patch('/active/:id')
  active(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    return this.valorParametroService.active(id);
  }
}
