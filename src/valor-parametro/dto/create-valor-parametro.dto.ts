import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateValorParametroDto {
    @ApiProperty()
    @IsNotEmpty()
    @MinLength(1)
    nombre: string;

    @ApiProperty({
        example: 'active',
        description: 'Indica si el parametro se encuentra activo o inactivo',
    })
    @IsOptional()
    status?: string;
}
