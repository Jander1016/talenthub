import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private readonly servicesRepository: Repository<Service>,
  ) {}

  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    const newService = this.servicesRepository.create(createServiceDto);
    return this.servicesRepository.save(newService);
  }

  async findAll(): Promise<Service[]> {
    return this.servicesRepository.find();
  }

  async findOne(id: string): Promise<Service> {
    return this.servicesRepository.findOne({ where: { service_id: id } });
  }

  async update(id: string, updateServiceDto: UpdateServiceDto): Promise<Service> {
    const existingService = await this.servicesRepository.findOne({ where: { service_id: id } });
    if (!existingService) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }

    const updatedService = this.servicesRepository.merge(existingService, updateServiceDto);
    return this.servicesRepository.save(updatedService);
  }

  async remove(id: string): Promise<void> {
    await this.servicesRepository.delete(id);
  }
}
