import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Client } from '../../clients/entities/client.entity'; // Asegúrate de importar correctamente la entidad Client

@Entity({ name: 'wishlists' })
export class Wishlist {
  @PrimaryColumn({ type: 'varchar', length: 40 })
  wishlist_id: string;

  @Column({ type: 'varchar', length: 40 })
  client_id: string;

  @ManyToOne(() => Client, client => client.wishlists)
  @JoinColumn({ name: 'client_id' })
  client: Client;
}
