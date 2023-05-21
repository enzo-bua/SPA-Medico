import { 
  Column, 
  PrimaryGeneratedColumn, 
  Entity, BaseEntity, 
  CreateDateColumn, 
  UpdateDateColumn, 
  ManyToMany,
  OneToMany} 
from 'typeorm'
import { Consulta } from './Consulta';

@Entity()
export class Paciente extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  localidad: string;

  @Column()
  fecha_nacimiento: string;

  @Column()
  dni: string;

  @Column()
  edad: number;

  @Column()
  telefono: string;

  @Column()
  obra_social: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAd: Date

  @OneToMany(() => Consulta, (consulta) => consulta.paciente,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  consulta: Consulta[];
}