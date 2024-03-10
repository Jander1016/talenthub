import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {

  constructor(
    @InjectRepository(Client)
    private clientsRepository:Repository<Client>
  ){

  }

  async create(createClientDto: CreateClientDto) {
    return await this.clientsRepository.save(createClientDto);
  }

  async findAll() {
    return await this.clientsRepository.find();
  }

  async findOne(client_id: string) {
    return await this.clientsRepository.findOneBy({client_id});
  }
  



  async update(id: number, updateClientDto: UpdateClientDto) {
    return await this.clientsRepository.update(id, updateClientDto) ;
  }

  async remove(id: number) {
    return await `This action removes a #${id} client`;
  }
}
