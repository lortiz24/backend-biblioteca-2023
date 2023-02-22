import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsOptional, IsString, MinLength } from "class-validator";

export class CreateParametroDto {
    @ApiProperty({
        example: 'tipo documento',
        description: 'nombre del parametro',
        uniqueItems: true
    })
    @IsString()
    @MinLength(1)
    nombre: string;

    @ApiProperty({
        example: 'indica el tipo de documento del usuario',
        description: 'Ofrece una breve descripcion del parametro',
    })
    @IsOptional()
    @MinLength(1)
    descripcion: string;

    @ApiProperty({
        example: ['tarjeta de identidad', 'cedula de ciudadania'],
        description: 'Ofrece una breve descripcion del parametro',
    }) 
    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    @MinLength(1,{each:true})
    valoresParametro?: string[] = [];

    @ApiProperty({
        example: 'active',
        description: 'Indica si el parametro se encuentra activo o inactivo',
    })
    @IsOptional()
    status?: string;
}
