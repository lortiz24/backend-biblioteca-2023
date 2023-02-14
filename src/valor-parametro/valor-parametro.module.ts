import { Module } from '@nestjs/common';
import { ValorParametroService } from './valor-parametro.service';
import { ValorParametroController } from './valor-parametro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValorParametro } from './entities/valor-parametro.entity';
import { Parametro } from 'src/parametros/entities/parametro.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ValorParametro, Parametro])
  ],
  controllers: [ValorParametroController],
  providers: [ValorParametroService]
})
export class ValorParametroModule { }
