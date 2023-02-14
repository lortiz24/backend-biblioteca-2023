import { Parametro } from "src/parametros/entities/parametro.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'parametros' })
export class ValorParametro {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { unique: true })
    nombre: string;


    @ManyToOne(
        () => Parametro,
        (parametro) => parametro.valoresParametros,
    )
    parametro: Parametro;



//----------------------------------------------------------------



    @BeforeInsert()
    nombreToLowerCaseCreate() {
        this.nombre = this.nombre.toLowerCase()
    }
    @BeforeUpdate()
    nombreToLowerCaseUpdate() {
        if (this.nombre) this.nombre = this.nombre.toLowerCase()
    }
}
