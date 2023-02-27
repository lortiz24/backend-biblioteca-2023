import { Module } from '@nestjs/common';
import { UserParametrosService } from './user-parametros.service';
import { UserParametrosController } from './user-parametros.controller';

@Module({
  controllers: [UserParametrosController],
  providers: [UserParametrosService]
})
export class UserParametrosModule {}
