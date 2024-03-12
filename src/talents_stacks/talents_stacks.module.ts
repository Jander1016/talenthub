import { Module } from '@nestjs/common';
import { TalentsStacksService } from './talents_stacks.service';
import { TalentsStacksController } from './talents_stacks.controller';

@Module({
  controllers: [TalentsStacksController],
  providers: [TalentsStacksService],
})
export class TalentsStacksModule {}
