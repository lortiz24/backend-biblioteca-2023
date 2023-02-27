import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserParametro } from 'src/user-parametros/entities/user-parametro.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserParametro]),
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
