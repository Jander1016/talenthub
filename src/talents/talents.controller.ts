import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TalentsService } from './talents.service';
import { CreateTalentDto } from './dto/create-talent.dto';
import { UpdateTalentDto } from './dto/update-talent.dto';
import { TalentValidationPipe } from '../pipes/talent-validation.pipe';
import { Talent } from '../talents/entities/talent.entity';

@Controller('api/talents')
export class TalentsController {
  constructor(private readonly talentsService: TalentsService) {}

  @Post()
  @UsePipes(new ValidationPipe()) // Utiliza el ValidationPipe proporcionado por NestJS
  async create(@Body() createTalentDto: CreateTalentDto) {
    return await this.talentsService.create(createTalentDto);
  }

  @Get()
  async findAll() {
    return await this.talentsService.findAll();
  }

  @Get(':talent_id')
  async findOne(@Param('talent_id') talent_id: string) {
    return await this.talentsService.findOne(talent_id);
  }

  @Put(':talent_id')
  @UsePipes(new ValidationPipe()) // Utiliza el ValidationPipe proporcionado por NestJS
  async update(@Param('talent_id') talent_id: string, @Body() updateTalentDto: UpdateTalentDto) {
    return await this.talentsService.update(talent_id, updateTalentDto);
  }

  @Delete(':talent_id')
  async remove(@Param('talent_id') talent_id: string) {
    return await this.talentsService.remove(talent_id);
  }
}
