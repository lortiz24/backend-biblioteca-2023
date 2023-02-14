import { IsString, MinLength } from "class-validator";

export class CreateValorParametroDto {
    @IsString()
    @MinLength(1)
    nombre: string;
}
