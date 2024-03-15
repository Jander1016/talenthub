import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'talents' })
export class Talent {
  @PrimaryGeneratedColumn('uuid')
  talent_id: string;

  @Column({ name: 'name_talent', nullable: false })
  name_talent: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'avatar', nullable: true })
  avatar: string;

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

  @Column({ name: 'rating', default: 0 })
  rating: number;
}