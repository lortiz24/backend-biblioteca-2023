import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateValorParametroDto {
    @ApiProperty()
    @IsString()
    @MinLength(1)
    nombre: string;
}
