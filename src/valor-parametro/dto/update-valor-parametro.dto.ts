import { PartialType } from '@nestjs/mapped-types';
import { IsUUID } from 'class-validator';
import { CreateValorParametroDto } from './create-valor-parametro.dto';

export class UpdateValorParametroDto extends PartialType(CreateValorParametroDto) {
    @IsUUID()
    id: string;
}
