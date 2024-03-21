import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { generateHash } from 'src/auth/utils/handleBcrypt';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
  ) { }

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const { password } = createClientDto
    const hashedPassword = await generateHash(password)
    return await this.clientsRepository.save({ ...createClientDto, password: hashedPassword });
  }

  async findAll(): Promise<Client[]> {
    return await this.clientsRepository.find({});
  }

  async findOne(client_id: string): Promise<Client> {
    const clientById = await this.clientsRepository.findOneBy({ client_id });
    return clientById
  }

  async update(client_id: string, updateClientDto: UpdateClientDto): Promise<Client> {

    const existingClient = await this.clientsRepository.findOne({ where: { client_id } });
    if (!existingClient) {
      throw new NotFoundException(`Client with ID ${client_id} not found`);
    }
    const { password } = updateClientDto
    if (password) {
      const hashedPassword = await generateHash(password)
      this.clientsRepository.merge({ ...existingClient, password: hashedPassword }, updateClientDto);
    }
    // Merge the existing client with the updateClientDto
   else this.clientsRepository.merge(existingClient, updateClientDto);
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