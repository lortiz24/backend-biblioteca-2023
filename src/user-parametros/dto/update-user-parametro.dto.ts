import { PartialType } from '@nestjs/swagger';
import { CreateUserParametroDto } from './create-user-parametro.dto';

export class UpdateUserParametroDto extends PartialType(CreateUserParametroDto) {}
