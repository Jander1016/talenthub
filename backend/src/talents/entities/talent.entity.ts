import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'talents' })
export class Talent {
  @PrimaryGeneratedColumn('uuid')
  talent_id: string;

  @Column({ name: 'name_talent', nullable: false })
  name_talent: string;


  @Column({ name: 'nro_identification', nullable: false , unique: true })
  nro_identification: string;


  @Column({ name: 'password', nullable: false })
  password: string;


  @Column({ name: 'email', nullable: false, unique: true })
  email: string;

  @Column({ name: 'avatar'})
  avatar: string;

  @Column({ name: 'personal_page', nullable: false })
  personal_page: string;

  @Column({ name: 'talent_description'})
  talent_description: string;

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