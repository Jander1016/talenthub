import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { Admin } from '../admins/entities/admin.entity';


@Injectable()
export class AdminValidationPipe implements PipeTransform {
  transform(value: any): Admin {
    if (!value.email || !value.password) {
      throw new BadRequestException('Email and password are required');
    }
    return value;
  }
}
