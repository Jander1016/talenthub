import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  service_id: string;

  @Column()
  name_service: string;

  @Column()
  description: string;

}