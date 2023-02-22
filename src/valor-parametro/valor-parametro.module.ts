import { Module } from '@nestjs/common';
import { ValorParametroService } from './valor-parametro.service';
import { ValorParametroController } from './valor-parametro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValorParametro } from './entities/valor-parametro.entity';
import { Parametro } from 'src/parametros/entities/parametro.entity';
import { ParametrosModule } from 'src/parametros/parametros.module';
import { forwardRef } from '@nestjs/common/utils';


@Module({
  imports: [
    TypeOrmModule.forFeature([ValorParametro, Parametro]),
    forwardRef(() => ParametrosModule)
  ],
  controllers: [ValorParametroController],
  providers: [ValorParametroService],
  exports: [ValorParametroService]
})
export class ValorParametroModule { }
