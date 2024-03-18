import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'talents' })
export class Talent {
  @PrimaryGeneratedColumn('uuid')
  talent_id: string;

  @Column({ name: 'name_talent', nullable: false })
  name_talent: string;


  @Column({ name: 'nro_identification', nullable: false })
  nro_identification: string;


  @Column({ name: 'password', nullable: false })
  password: string;


  @Column({ name: 'email', nullable: false })
  email: string;


  @Column({ name: 'avatar', nullable: true })
  avatar: string;

  @Column({ name: 'personal_page', nullable: true })
  personal_page: string;

  @Column({ name: 'location', nullable: true })
  location: string;

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

}