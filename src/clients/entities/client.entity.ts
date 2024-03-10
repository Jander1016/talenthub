import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  avatar

  @Column({default:1})
  isActive: number;
}
