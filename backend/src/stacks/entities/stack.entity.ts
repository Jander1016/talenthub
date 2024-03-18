import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Service } from '../../services/entities/service.entity';

@Entity({ name: 'stacks' }) // Especifica el nombre de la tabla en la base de datos
export class Stack {
  @PrimaryGeneratedColumn('uuid')
  stack_id: string;

  @Column({ name: 'name_stack', nullable: false }) // Especifica el nombre de la columna y que no puede ser nula
  name_stack: string;

  @ManyToOne(() => Service, { eager: true })
  @JoinColumn({ name: 'service_id' })
  service: Service;
}
