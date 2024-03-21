import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'detail_wishlist' }) // Especifica el nombre de la tabla en la base de datos
export class DetailWishlist {
  @PrimaryGeneratedColumn('uuid')
  detail_wishlist_id: string;

  @Column({ name: 'wishlist_id', nullable: false }) // Especifica el nombre de la columna y que no puede ser nula
  wishlist_id: string;

  @Column({ name: 'talent_id', nullable: false }) // Especifica el nombre de la columna y que no puede ser nula
  talent_id: string;

  @Column({ name: 'isactive', default: 1 }) // Especifica el nombre de la columna y su valor por defecto
  isActive: number;
}

