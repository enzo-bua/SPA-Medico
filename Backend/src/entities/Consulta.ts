import { 
  Column, 
  PrimaryGeneratedColumn, 
  Entity, BaseEntity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn
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

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Paciente, paciente => paciente.consulta, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'id_paciente' })
  paciente!: Paciente;
}