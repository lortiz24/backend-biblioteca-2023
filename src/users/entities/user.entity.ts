import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    fullName: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'text',
        array: true,
        default: ['user']
    })
    roles: string[];

    @Column({
        type: 'boolean',
        default: true
    })

    @Column('varchar')
    username: string;

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
    isActive: boolean;

}
