import { Injectable } from '@nestjs/common';
import { CreateTalentsStackDto } from './dto/create-talents_stack.dto';
import { UpdateTalentsStackDto } from './dto/update-talents_stack.dto';

@Injectable()
export class TalentsStacksService {
  create(createTalentsStackDto: CreateTalentsStackDto) {
    return 'This action adds a new talentsStack';
  }

  findAll() {
    return `This action returns all talentsStacks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} talentsStack`;
  }

  update(id: number, updateTalentsStackDto: UpdateTalentsStackDto) {
    return `This action updates a #${id} talentsStack`;
  }

  remove(id: number) {
    return `This action removes a #${id} talentsStack`;
  }
}
