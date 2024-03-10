import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ServicesService {

constructor(
  @InjectRepository(Service)
  private servicesRepository:Repository<Service>,
){

}


  async create(createServiceDto: CreateServiceDto) {
    return await this.servicesRepository.save(createServiceDto);
  }

  async findAll() {
    return await this.servicesRepository.find();
  }

  async findOne(id: number) {
    return await `This action returns a #${id} service`;
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    return await `This action updates a #${id} service`;
  }

  async remove(id: number) {
    return await`This action removes a #${id} service`;
  }
}
