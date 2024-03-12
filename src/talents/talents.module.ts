import { Module } from '@nestjs/common';
import { TalentsService } from './talents.service';
import { TalentsController } from './talents.controller';

@Module({
  controllers: [TalentsController],
  providers: [TalentsService],
})
export class TalentsModule {}
