import { Injectable } from '@nestjs/common';
import { CreateTalentDto } from './dto/create-talent.dto';
import { UpdateTalentDto } from './dto/update-talent.dto';

@Injectable()
export class TalentsService {
  create(createTalentDto: CreateTalentDto) {
    return 'This action adds a new talent';
  }

  findAll() {
    return `This action returns all talents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} talent`;
  }

  update(id: number, updateTalentDto: UpdateTalentDto) {
    return `This action updates a #${id} talent`;
  }

  remove(id: number) {
    return `This action removes a #${id} talent`;
  }
}
