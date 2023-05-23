import { 
  Column, 
  PrimaryGeneratedColumn, 
  Entity, BaseEntity,
} from 'typeorm'

@Entity()
export class Password extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: String;
}