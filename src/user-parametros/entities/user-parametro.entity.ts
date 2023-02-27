
import { Parametro } from 'src/parametros/entities/parametro.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'user_parametros' })

export class UserParametro {

    @PrimaryGeneratedColumn('increment')
    id: string;

    @ManyToOne(
        () => User,
        (user) => user.usersParametros,
    )
    user: User;
    @ManyToOne(
        () => Parametro,
        (parametro) => parametro.usersParametros,
    )
    parametro: User;

    @Column()
    value: string;




}

