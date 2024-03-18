import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { TalentsStacksService } from './talents_stacks.service';
import { CreateTalentsStackDto } from './dto/create-talents_stack.dto';
import { UpdateTalentsStackDto } from './dto/update-talents_stack.dto';
import { TalentsStackValidationPipe } from '../pipes/talents-stack-validation.pipe'; // Importamos el pipe de validación

@Controller('talents-stacks')
export class TalentsStacksController {
  constructor(private readonly talentsStacksService: TalentsStacksService) {}

  @Post()
  @UsePipes(ValidationPipe) // Usamos el ValidationPipe de NestJS
  @UsePipes(new TalentsStackValidationPipe()) // Usamos nuestro pipe de validación personalizado
  create(@Body() createTalentsStackDto: CreateTalentsStackDto) {
    return this.talentsStacksService.create(createTalentsStackDto);
  }

  @Get()
  findAll() {
    return this.talentsStacksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.talentsStacksService.findOne(+id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe) // Usamos el ValidationPipe de NestJS
  @UsePipes(new TalentsStackValidationPipe()) // Usamos nuestro pipe de validación personalizado
  update(@Param('id') id: string, @Body() updateTalentsStackDto: UpdateTalentsStackDto) {
    return this.talentsStacksService.update(+id, updateTalentsStackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.talentsStacksService.remove(+id);
  }
}
