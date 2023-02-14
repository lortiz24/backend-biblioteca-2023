import { IsOptional, IsString, MinLength } from "class-validator";

export class CreateParametroDto {

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsOptional()
    valoresParametro?: string[];
}
