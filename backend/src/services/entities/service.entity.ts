import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'services' }) // Especifica el nombre de la tabla en la base de datos
export class Service {
  @PrimaryGeneratedColumn('uuid')
  service_id: string;

  @Column({ name: 'name_service', nullable: false }) // Especifica el nombre de la columna y que no puede ser nula
  name_service: string;

  @Column({ name: 'description', nullable: true }) // Especifica el nombre de la columna y que puede ser nula
  description: string;
}
