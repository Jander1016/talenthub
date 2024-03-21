import { PartialType } from '@nestjs/swagger';
import { CreateTalentDto } from './create-talent.dto';

export class UpdateTalentDto extends PartialType(CreateTalentDto) {
  CreateTalentDto?: CreateTalentDto
}
