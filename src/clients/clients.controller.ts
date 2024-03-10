import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('api/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    try {
      return await this.clientsService.create(createClientDto);
    } catch (error) {
      throw new InternalServerErrorException('Error creating client');
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.clientsService.findAll();
    } catch (error) {
      throw new InternalServerErrorException('Error fetching clients');
    }
  }

  @Get(':client_id')
  async findOne(@Param('client_id') client_id: string) {
    try {
      const client = await this.clientsService.findOne(client_id);
      if (!client) {
        throw new NotFoundException(`Client with ID ${client_id} not found`);
      }
      return client;
    } catch (error) {
      throw new InternalServerErrorException('Error fetching client');
    }
  }

  @Put(':client_id')
  async update(@Param('client_id') client_id: string, @Body() updateClientDto: UpdateClientDto) {
    try {
      return await this.clientsService.update(client_id, updateClientDto);
    } catch (error) {
      throw new InternalServerErrorException('Error updating client');
    }
  }

  @Delete(':client_id')
  async remove(@Param('client_id') client_id: string) {
    try {
      await this.clientsService.remove(client_id);
      return { message: 'Client deleted successfully' };
    } catch (error) {
      throw new InternalServerErrorException('Error deleting client');
    }
  }
}
