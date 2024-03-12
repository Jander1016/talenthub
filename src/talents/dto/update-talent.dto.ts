import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-talent.dto';

export class updateTalentDto extends PartialType(CreateTalentDto) {}
