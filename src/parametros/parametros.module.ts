import { Module } from '@nestjs/common';
import { ParametrosService } from './parametros.service';
import { ParametrosController } from './parametros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parametro } from './entities/parametro.entity';
import { ValorParametro } from 'src/valor-parametro/entities/valor-parametro.entity';
import { ValorParametroModule } from 'src/valor-parametro/valor-parametro.module';
import { forwardRef } from '@nestjs/common/utils';

@Module({
  imports: [
    TypeOrmModule.forFeature([Parametro, ValorParametro]),
    forwardRef(() => ValorParametroModule)
  ],
  controllers: [ParametrosController],
  providers: [ParametrosService],
  exports:[ParametrosService]
})
export class ParametrosModule { }
