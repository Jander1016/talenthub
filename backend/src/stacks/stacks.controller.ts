import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { StacksService } from './stacks.service';
import { CreateStackDto } from './dto/create-stack.dto';
import { UpdateStackDto } from './dto/update-stack.dto';
import { StackValidationPipe } from '../pipes/stack-validation.pipe';
import { Stack } from './entities/stack.entity';

@Controller('api/v1/stacks')
export class StacksController {
  constructor(private readonly stacksService: StacksService) {}

  @Post()
  @UsePipes(new ValidationPipe()) // Utiliza el ValidationPipe proporcionado por NestJS
  async create(@Body() createStackDto: CreateStackDto) {
    return await this.stacksService.create(createStackDto);
  }

  @Get()
  async findAll() {
    return await this.stacksService.findAll();
  }

  @Get(':stack_id')
  async findOne(@Param('stack_id') stack_id: string) {
    return await this.stacksService.findOne(stack_id);
  }

  @Put(':stack_id')
  @UsePipes(new ValidationPipe()) // Utiliza el ValidationPipe proporcionado por NestJS
  async update(@Param('stack_id') stack_id: string, @Body() updateStackDto: UpdateStackDto) {
    return await this.stacksService.update(stack_id, updateStackDto);
  }

  @Delete(':stack_id')
  async remove(@Param('stack_id') stack_id: string) {
    return await this.stacksService.remove(stack_id);
  }
}
