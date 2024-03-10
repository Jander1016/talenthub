import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  client_id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  avatar: string;

  @Column({
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
}

