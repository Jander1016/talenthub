import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { Stack } from '../stacks/entities/stack.entity';

@Injectable()
export class StackValidationPipe implements PipeTransform {
  transform(value: any): Stack {
    if (!value.name_stack || !value.service) {
      throw new BadRequestException('Name of the stack and associated service are required');
    }
    return value;
  }
}
