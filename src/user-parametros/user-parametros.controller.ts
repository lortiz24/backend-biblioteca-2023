import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserParametrosService } from './user-parametros.service';
import { CreateUserParametroDto } from './dto/create-user-parametro.dto';
import { UpdateUserParametroDto } from './dto/update-user-parametro.dto';

@Controller('user-parametros')
export class UserParametrosController {
  constructor(private readonly userParametrosService: UserParametrosService) {}

  @Post()
  create(@Body() createUserParametroDto: CreateUserParametroDto) {
    return this.userParametrosService.create(createUserParametroDto);
  }

  @Get()
  findAll() {
    return this.userParametrosService.findAll();
  }

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
