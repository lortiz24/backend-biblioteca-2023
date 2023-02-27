import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserParametro } from 'src/user-parametros/entities/user-parametro.entity';
@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn('increment')
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

    @Column('boolean')
    isActive: boolean;

}
