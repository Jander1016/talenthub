import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { TalentsStack } from '../talents_stacks/entities/talents_stack.entity';

@Injectable()
export class TalentsStackValidationPipe implements PipeTransform {
  transform(value: any): TalentsStack {
    if (!value.talent_id || !value.stack_id) {
      throw new BadRequestException('Talent ID and Stack ID are required');
    }
    return value;
  }
}
