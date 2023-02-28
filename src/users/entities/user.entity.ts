import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserParametro } from 'src/user-parametros/entities/user-parametro.entity';
import { ApiProperty } from '@nestjs/swagger';

//todo: llevar estos enums al modulo de auth
export enum ValidRoles {
    admin = 'admin',
    superUser = 'super-user',
    user = 'user',
}


@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn('increment')
    @ApiProperty({
        example: '123456',
        description: 'Es el ID unico del usuario',
        uniqueItems: true
    })
    id: number;

    @Column()
    @ApiProperty({
        example: 'Luis Gabriel Franco',
        description: 'Es el nombre completo del usuario',
        uniqueItems: false
    })
    fullName: string;

    @Column({ unique: true })
    @ApiProperty({
        example: 'lfran@gmail.com',
        description: 'Es el email del usuario, una credencial del usuario',
        uniqueItems: true
    })
    email: string;

    @Column()
    @ApiProperty({
        example: 'kjhdh1%&*85485485',
        description: 'Es la contraseña personal del usuario',
        uniqueItems: false
    })
    password: string;

    @Column({
        type: 'text',
        array: true,
        default: ['user']
    })
    @ApiProperty({
        example: 'admin',
        description: 'Es el rol del usuario',
        uniqueItems: true,
        enum: ValidRoles,
        default: 'user'
    })
    roles: string[];

    //todo: definir si es infromacion importante para el negocio almacenar estos campos 
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

    @OneToMany(
        () => UserParametro,
        (userParametros) => userParametros.user,
        { cascade: true }
    )
    usersParametros?: UserParametro[]

    @Column({
        type: 'boolean',
        default: true
    })
    isActive: boolean;

}
