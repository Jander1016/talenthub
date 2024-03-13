import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Service } from '../../services/entities/service.entity';

@Entity()
export class Stack {
  @PrimaryGeneratedColumn('uuid')
  stack_id: string;

  @Column()
  name_stack: string;

  @ManyToOne(() => Service, { eager: true })
  @JoinColumn({ name: 'service_id' })
  service: Service;
}

