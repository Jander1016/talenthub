import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stack } from './entities/stack.entity';
import { StacksService } from './stacks.service';
import { StacksController } from './stacks.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Stack])],
  providers: [StacksService],
  controllers: [StacksController],
})
export class StacksModule {}
