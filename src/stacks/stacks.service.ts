import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stack } from './entities/stack.entity';
import { CreateStackDto } from './dto/create-stack.dto';
import { UpdateStackDto } from './dto/update-stack.dto';

@Injectable()
export class StacksService {
  constructor(
    @InjectRepository(Stack)
    private stacksRepository: Repository<Stack>,
  ) {}

  async create(createStackDto: CreateStackDto): Promise<Stack> {
    const newStack = this.stacksRepository.create(createStackDto);
    return this.stacksRepository.save(newStack);
  }

  async findAll(): Promise<Stack[]> {
    return this.stacksRepository.find();
  }

  async findOne(stack_id): Promise<Stack> {
    const stack = await this.stacksRepository.findOne(stack_id);
    if (!stack) {
      throw new NotFoundException(`Stack with ID ${stack_id} not found`);
    }
    return stack;
  }

  async update(stack_id: string, updateStackDto: UpdateStackDto): Promise<Stack> {
    const existingStack = await this.findOne(stack_id);
    this.stacksRepository.merge(existingStack, updateStackDto);
    return this.stacksRepository.save(existingStack);
  }

  async remove(stack_id: string): Promise<void> {
    const result = await this.stacksRepository.delete(stack_id);
    if (result.affected === 0) {
      throw new NotFoundException(`Stack with ID ${stack_id} not found`);
    }
  }
}
