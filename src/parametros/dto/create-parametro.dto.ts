import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsOptional, IsString, MinLength } from "class-validator";

export class CreateParametroDto {
    @ApiProperty({
        example: 'tipo documento',
        description: 'nombre del parametro',
        uniqueItems: true
    })
    //TODO: VALIDAR CON EXPRESION REGULAR QUE NO INGRESEN CARACTERES ESPECIALES
    @IsString()
    @MinLength(1)
    nombre: string;

    @ApiProperty({
        example: 'tipo documento',
        description: 'El tipo de valores parametros que tendra, los valores parametros podran ser una lista de valores definidos, o un campo digitable',
        uniqueItems: true
    })
    @MinLength(1)
    type: string;

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
