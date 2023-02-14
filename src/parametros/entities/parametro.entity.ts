import { ValorParametro } from "src/valor-parametro/entities/valor-parametro.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'parametros' })
export class Parametro {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { unique: true })
    nombre: string;

    @Column('varchar', { nullable: true })
    descripcion: string;

    @Column('varchar', { nullable: false, default: 'active' })
    status: string;

    @OneToMany(
        () => ValorParametro,
        (valorParametro) => valorParametro.parametro,
        { cascade: true }
    )
    valoresParametros?: ValorParametro[]


    //------------------------------Befores----------------------------------
    @BeforeInsert()
    nombreToLowerCaseCreate() {
        this.nombre = this.nombre.toLowerCase()
    }
    @BeforeUpdate()
    nombreToLowerCaseUpdate() {
        if (this.nombre) this.nombre = this.nombre.toLowerCase()
    }
}
