import { Module } from '@nestjs/common';
import { TalentsService } from './talents.service';
import { TalentsController } from './talents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Talent } from './entities/talent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Talent])],
  controllers: [TalentsController],
  providers: [TalentsService],
})
export class TalentsModule {}
