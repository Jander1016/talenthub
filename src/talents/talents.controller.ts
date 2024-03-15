import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TalentsService } from './talents.service';
import { CreateTalentDto } from './dto/create-talent.dto';
import { UpdateTalentDto } from './dto/update-talent.dto';

@Controller('api/talents')
export class TalentsController {
  constructor(private readonly talentsService: TalentsService) {}

  @Post()
  async create(@Body() createTalentDto: CreateTalentDto) {
    try {
      return await this.talentsService.create(createTalentDto);
    } catch (error) {
      return { message: error.message };
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.talentsService.findAll();
    } catch (error) {
      return { message: error.message };
    }
  }

  @Get(':talent_id')
  async findOne(@Param('talent_id') talent_id: string) {
    try {
      const talent = await this.talentsService.findOne(talent_id);
      if (!talent) {
        return { message: `Talent with ID ${talent_id} not found` };
      }
      return talent;
    } catch (error) {
      return { message: error.message };
    }
  }

  @Put(':talent_id')
  async update(@Param('talent_id') talent_id: string, @Body() updateTalentDto: UpdateTalentDto) {
    try {
      const updatedTalent = await this.talentsService.update(talent_id, updateTalentDto);
      
      if (!updatedTalent) {
        return { message: `Talent with ID ${talent_id} not found` };
      }
      
      return updatedTalent;
    } catch (error) {
      return { message: error.message };
    }}
  

    @Delete(':talent_id')
    async remove(@Param('talent_id') talent_id: string) {
      try {
        await this.talentsService.remove(talent_id);
        return { message: `Talent with ID ${talent_id} has been successfully deleted` };
      } catch (error) {
        return { message: error.message };
      }
}}
