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
    return await 'This action adds a new client';
  }

  async findAll() {
    return await `This action returns all clients`;
  }

  async findOne(id: number) {
    return await `This action returns a #${id} client`;
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    return await `This action updates a #${id} client`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} client`;
  }
}
