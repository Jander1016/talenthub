import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'talents' }) // Especifica el nombre de la tabla en la base de datos
export class Talent {
  @PrimaryGeneratedColumn('uuid')
  talent_id: string;

  @Column({ name: 'name_talent', nullable: false }) // Especifica el nombre de la columna y que no puede ser nula
  name_talent: string;

  @Column({ name: 'password', nullable: false }) // Especifica el nombre de la columna y que no puede ser nula
  password: string;

  @Column({ name: 'email', nullable: false }) // Especifica el nombre de la columna y que no puede ser nula
  email: string;

  @Column({ name: 'avatar', nullable: true }) // Especifica el nombre de la columna y que puede ser nula
  avatar: string;

  @Column({
    name: 'is_active',
    default: true,
    transformer: {
      to(value: boolean): number {
        return value ? 1 : 0;
      },
      from(value: number): boolean {
        return value === 1;
      },
    },
  })
  isActive: boolean;

  @Column({ name: 'rating', default: 0 }) // Especifica el nombre de la columna y su valor predeterminado
  rating: number;
}
