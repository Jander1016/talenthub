import { PartialType } from '@nestjs/mapped-types';
import { CreateTalentsStackDto } from './create-talents_stack.dto';

export class UpdateTalentsStackDto extends PartialType(CreateTalentsStackDto) {}
