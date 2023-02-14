import { ApiProperty } from "@nestjs/swagger";
import { ValorParametro } from "src/valor-parametro/entities/valor-parametro.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'parametros' })
export class Parametro {

    @ApiProperty({
        example: '304368fc-b081-4f1a-92a7-b41935ad052b',
        description: 'Parametro ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        example: 'tipo documento',
        description: 'nombre del parametro',
        uniqueItems: true
    })
    @Column('varchar', { unique: true })
    nombre: string;

    @ApiProperty()
    @Column('varchar', { nullable: true })
    descripcion: string;

    @ApiProperty()
    @Column('varchar', { nullable: false, default: 'active' })
    status: string;

    @ApiProperty()
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
