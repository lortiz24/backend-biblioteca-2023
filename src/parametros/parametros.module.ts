import { Module } from '@nestjs/common';
import { ParametrosService } from './parametros.service';
import { ParametrosController } from './parametros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parametro } from './entities/parametro.entity';
import { ValorParametro } from 'src/valor-parametro/entities/valor-parametro.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Parametro, ValorParametro])
  ],
  controllers: [ParametrosController],
  providers: [ParametrosService]
})
export class ParametrosModule { }
