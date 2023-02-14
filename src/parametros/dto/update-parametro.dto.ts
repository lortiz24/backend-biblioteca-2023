import { PartialType } from '@nestjs/mapped-types';
import { IsUUID } from 'class-validator';
import { CreateParametroDto } from './create-parametro.dto';

export class UpdateParametroDto extends PartialType(CreateParametroDto) { }
