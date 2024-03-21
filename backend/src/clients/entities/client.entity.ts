import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Wishlist } from '../../wishlists/entities/wishlist.entity'; // Asegúrate de importar correctamente la entidad Wishlist

@Entity({ name: 'clients' })
export class Client {
  @PrimaryGeneratedColumn("uuid")
  client_id: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  avatar: string;

  @Column({ type: 'tinyint', default: 1 })
  is_active: number;

  @OneToMany(() => Wishlist, wishlist => wishlist.client)
  wishlists: Wishlist[];
}
