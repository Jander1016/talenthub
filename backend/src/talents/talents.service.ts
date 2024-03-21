import { HttpException, Injectable } from '@nestjs/common';
import { CreateTalentDto } from './dto/create-talent.dto';
import { UpdateTalentDto } from './dto/update-talent.dto';
import { Repository } from 'typeorm';
import { Talent } from './entities/talent.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { generateHash } from 'src/auth/utils/handleBcrypt';

@Injectable()
export class TalentsService {
  constructor(
    @InjectRepository(Talent)
    private readonly talentsRepository: Repository<Talent>,
  ) {
  }
  async create(createTalentDto: CreateTalentDto) {
    const { password } = createTalentDto
    const hashedPassword = await generateHash(password)
    return await this.talentsRepository.save({ ...createTalentDto, password:hashedPassword }) 
  }

  async findAll() {
    const talentlist = await this.talentsRepository.find()
    if (!talentlist) throw new HttpException("TALENTS_NOT_FOUND", 404);
    return this.talentsRepository.find();
  }

  async findOne(id: string) {
    const talentById = await this.talentsRepository.findOneBy({ talent_id: id })
    if (!talentById) throw new HttpException("TALENT_NOT_FOUND", 404);
    return this.talentsRepository.findOneBy({ talent_id: id });
  }

  async update(id: string, updateTalentDto: UpdateTalentDto) {
    const talentById = await this.talentsRepository.findOneBy({ talent_id: id })
    if (!talentById) throw new HttpException("TALENT_NOT_FOUND", 404);

    const { password } = updateTalentDto
    if (password) {
      const hashedPassword = await generateHash(password)
      await this.talentsRepository.update(id, {...updateTalentDto, password: hashedPassword});
    }
    else await this.talentsRepository.update(id, updateTalentDto);

    return this.talentsRepository.findOneBy({ talent_id: id });
  }

  remove(id: string) {
    return `This action removes a #${id} talent`;
  }
}
