import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { Service } from '../services/entities/service.entity';

@Injectable()
export class ServiceValidationPipe implements PipeTransform {
  transform(value: any): Service {
    if (!value.name_service) {
      throw new BadRequestException('Name of the service is required');
    }
    return value;
  }
}
