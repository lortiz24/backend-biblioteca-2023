import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';
import { ParametrosModule } from './parametros/parametros.module';
import { ValorParametroModule } from './valor-parametro/valor-parametro.module';
import { UserParametrosModule } from './user-parametros/user-parametros.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    CommonModule,
    UsersModule,
    ParametrosModule,
    ValorParametroModule,
    UserParametrosModule,
  ],
})
export class AppModule { }
