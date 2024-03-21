import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TalentsService } from './talents.service';
import { CreateTalentDto } from './dto/create-talent.dto';
import { UpdateTalentDto } from './dto/update-talent.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('talents')
@Controller('api/v1/talents')
export class TalentsController {
  constructor(private readonly talentsService: TalentsService) {}

  @Post()
  create(@Body() createTalentDto: CreateTalentDto) {
    return this.talentsService.create(createTalentDto);
  }

  @Get()
  findAll() {
    return this.talentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.talentsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTalentDto: UpdateTalentDto) {
    return this.talentsService.update(id, updateTalentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.talentsService.remove(id);
  }
}
