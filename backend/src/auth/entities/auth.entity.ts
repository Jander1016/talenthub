import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "auths"})
export class Auth {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  email: string;
  
  @Column()
  password: string;
}
