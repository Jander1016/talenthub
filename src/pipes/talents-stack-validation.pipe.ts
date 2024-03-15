import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Talent } from '../talents/entities/talent.entity';
import { Stack } from '../stacks/entities/stack.entity';

@Entity({ name: 'talents_stacks' })
export class TalentsStack {
  @PrimaryColumn({ name: 'talent_id' })
  talent_id: string;

  @PrimaryColumn({ name: 'stack_id' })
  stack_id: string;

  @ManyToOne(() => Talent, { eager: true })
  @JoinColumn({ name: 'talent_id' })
  talent: Talent;

  @ManyToOne(() => Stack, { eager: true })
  @JoinColumn({ name: 'stack_id' })
  stack: Stack;
}
