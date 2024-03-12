import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TalentsStacksService } from './talents_stacks.service';
import { CreateTalentsStackDto } from './dto/create-talents_stack.dto';
import { UpdateTalentsStackDto } from './dto/update-talents_stack.dto';

@Controller('talents-stacks')
export class TalentsStacksController {
  constructor(private readonly talentsStacksService: TalentsStacksService) {}

  @Post()
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
  update(@Param('id') id: string, @Body() updateTalentsStackDto: UpdateTalentsStackDto) {
    return this.talentsStacksService.update(+id, updateTalentsStackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.talentsStacksService.remove(+id);
  }
}
