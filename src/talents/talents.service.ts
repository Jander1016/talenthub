import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Talent } from './entities/talent.entity';
import { Repository } from 'typeorm';
import { CreateTalentDto } from './dto/create-talent.dto';
import { UpdateTalentDto } from './dto/update-talent.dto';

@Injectable()
export class TalentsService {
  constructor(
    @InjectRepository(Talent)
    private talentsRepository: Repository<Talent>,
  ) {}

  async create(createTalentDto: CreateTalentDto): Promise<Talent> {
    const newTalent = this.talentsRepository.create(createTalentDto);
    return this.talentsRepository.save(newTalent);
  }

  async findAll(): Promise<Talent[]> {
    return this.talentsRepository.find();
  }

  async findOne(talent_id: string): Promise<Talent> {
    return this.talentsRepository.findOne({ where: { talent_id } });
  }

  async update(talent_id: string, updateTalentDto: UpdateTalentDto): Promise<Talent> {
    const existingTalent = await this.talentsRepository.findOne({ where: { talent_id } });
    if (!existingTalent) {
      throw new NotFoundException(`Talent with ID ${talent_id} not found`);
    }
  
  
    this.talentsRepository.merge(existingTalent, updateTalentDto);
  
  
    return this.talentsRepository.save(existingTalent);
  }

  async remove(talent_id: string): Promise<void> {
    const result = await this.talentsRepository.delete(talent_id);
    if (result.affected === 0) {
      throw new NotFoundException(`Talent with ID ${talent_id} not found`);
    }
  }
}
