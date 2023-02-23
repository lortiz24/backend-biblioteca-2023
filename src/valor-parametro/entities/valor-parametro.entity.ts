import { ApiProperty } from "@nestjs/swagger";
import { Parametro } from "src/parametros/entities/parametro.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'valor_parametros' })
export class ValorParametro {
    @ApiProperty({
        example: '304368fc-b081-4f1a-92a7-b41935ad052b',
        description: 'ValorParametro ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @ApiProperty({
        example: '1002236987',
        description: 'Values associated with a parametro',
        uniqueItems: true
    })

    @ApiProperty()
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
