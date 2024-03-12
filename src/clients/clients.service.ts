import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const newClient = this.clientsRepository.create(createClientDto);
    return this.clientsRepository.save(newClient);
  }

  async findAll(): Promise<Client[]> {
    return this.clientsRepository.find();
  }

  async findOne(client_id: string): Promise<Client> {
    return this.clientsRepository.findOne({ where: { client_id } });
  }

  async update(client_id: string, updateClientDto: UpdateClientDto): Promise<Client> {
    const existingClient = await this.clientsRepository.findOne({ where: { client_id } });
    if (!existingClient) {
      throw new NotFoundException(`Client with ID ${client_id} not found`);
    }
  
    // Merge the existing client with the updateClientDto
    this.clientsRepository.merge(existingClient, updateClientDto);
  
    // Save the updated client
    return this.clientsRepository.save(existingClient);
  }

  async remove(client_id: string): Promise<void> {
    const result = await this.clientsRepository.delete(client_id);
    if (result.affected === 0) {
      throw new NotFoundException(`Client with ID ${client_id} not found`);
    }
  }
}