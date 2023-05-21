import { 
  Column, 
  PrimaryGeneratedColumn, 
  Entity, BaseEntity,
  ManyToOne,
  JoinColumn
} from 'typeorm'
import { Paciente } from './Paciente';

@Entity()
export class Consulta extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  consultas: string;

  @Column()
  consulta_paciente: number;

  @ManyToOne(() => Paciente, paciente => paciente.consulta, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'id_paciente' })
  paciente!: Paciente;
}