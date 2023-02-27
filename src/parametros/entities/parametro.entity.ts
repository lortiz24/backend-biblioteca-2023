import { ApiProperty } from "@nestjs/swagger";
import { UserParametro } from "src/user-parametros/entities/user-parametro.entity";
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

    @ApiProperty({
        example: 'list',
        description: 'El tipo de dato que tendran sus valores parametros, puede ser una lista, booleanos, enteros, o un campo de texto',
        uniqueItems: true
    })
    @Column('varchar',)
    type: string;

    @ApiProperty({
        example: 'indica el tipo de documento del usuario',
        description: 'Ofrece una breve descripcion del parametro',
    })
    @Column('varchar', { nullable: true })
    descripcion: string;

    @ApiProperty({
        example: 'active',
        description: 'Indica si el parametro se encuentra activo o inactivo',
    })
    @Column('varchar', { nullable: false, default: 'active' })
    status: string;

    @OneToMany(
        () => ValorParametro,
        (valorParametro) => valorParametro.parametro,
        { cascade: true }
    )
    valoresParametros?: ValorParametro[]
    @OneToMany(
        () => ValorParametro,
        (valorParametro) => valorParametro.parametro,
        { cascade: true }
    )
    usersParametros?: UserParametro[]


    //------------------------------Befores----------------------------------
    /* @BeforeInsert()
    nombreToLowerCaseCreate() {
        this.nombre = this.nombre.toLowerCase()
    }
    @BeforeUpdate()
    nombreToLowerCaseUpdate() {
        if (this.nombre) this.nombre = this.nombre.toLowerCase()
    } */
}
