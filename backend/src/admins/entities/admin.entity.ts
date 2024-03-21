import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'admins' }) // Especifica el nombre de la tabla en la base de datos
export class Admin {
  @PrimaryGeneratedColumn('uuid')
  admin_id: string;

  @Column({ name: 'email', nullable: false }) // Especifica el nombre de la columna y que no puede ser nula
  email: string;

  @Column({ name: 'password', nullable: false }) // Especifica el nombre de la columna y que no puede ser nula
  password: string;
}
