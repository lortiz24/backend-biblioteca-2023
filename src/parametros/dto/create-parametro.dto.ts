import { IsArray, IsOptional, IsString, MinLength } from "class-validator";

export class CreateParametroDto {

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsOptional()
    @MinLength(1)
    descripcion: string;

    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    @MinLength(1,{each:true})
    valoresParametro?: string[] = [];

    @IsOptional()
    status?: string;
}
