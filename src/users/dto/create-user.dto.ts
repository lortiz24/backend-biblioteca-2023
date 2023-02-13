import { IsArray, IsString } from 'class-validator';
import { Column } from 'typeorm';

export class CreateUserDto {

    @IsString()
    username: string;

    @IsString()
    email: string;

    @IsArray()
    roles: string[]

    @Column('varchar')
    password: string;
    @Column('varchar')
    fullname: string;

    @Column('varchar')
    tipo_identificacion: string;

    @Column('varchar', { unique: true })
    identificacion: string;

    @Column('varchar')
    genero: string;

    @Column('date')
    fecha_nacimiento: string;

    @Column('date')
    fecha_registro: string;

    @Column('boolean')
    isActive: boolean
}
