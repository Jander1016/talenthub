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
    const Client = this.clientsRepository.create(createClientDto);
    return this.clientsRepository.save(Client);
  }

  async findAll(): Promise<Client[]> {
    return this.clientsRepository.find();
  }

 async findOne(client_id): Promise<Client> {
  return this.clientsRepository.findOne({ client_id }); // Busca por client_id Y NO DA ERROR
}

  async update(client_id, updateClientDto: UpdateClientDto): Promise<Client> {
    const existingClient = await this.clientsRepository.findOne(client_id);
    if (!existingClient) {
      throw new NotFoundException(`Client with ID ${client_id} not found`);
    }

    // Merge the existing client with the updateClientDto
    const updatedClient = this.clientsRepository.merge(existingClient, updateClientDto);

    // Save the updated client
    return this.clientsRepository.save(updatedClient);
  }

  async remove(client_id: string): Promise<void> {
    const result = await this.clientsRepository.delete(client_id);
    if (result.affected === 0) {
      throw new NotFoundException(`Client with ID ${client_id} not found`);
    }
  }
}
