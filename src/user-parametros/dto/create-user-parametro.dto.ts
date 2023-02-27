import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, Min, MinLength } from "class-validator";

export class CreateUserParametroDto {
    @ApiProperty({
        example: '1688',
        description: 'Id del usuario',
        uniqueItems: true
    })
    @IsNotEmpty()
    @Min(1)
    user: number;

    @ApiProperty({
        example: '123456',
        description: 'Id del parametro',
        uniqueItems: true
    })
    @IsNotEmpty()
    @Min(1)
    parametro: number;



    @ApiProperty({
        example: 'masculino',
        description: 'Es el valor asociado a este usuario segun el parametro especificado',
    })
    @IsOptional()
    @MinLength(1)
    value: string;

}

