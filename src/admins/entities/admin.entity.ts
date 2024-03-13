import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  admin_id: string;


  @Column()
  email: string;

  @Column()
  password: string;
}
