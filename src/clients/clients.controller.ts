import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
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
      return { message: error.message };
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.clientsService.findAll();
    } catch (error) {
      return { message: error.message };
    }
  }

  @Get(':client_id')
  async findOne(@Param('client_id') client_id: string) {
    try {
      const client = await this.clientsService.findOne(client_id);
      if (!client) {
        return { message: `Client with ID ${client_id} not found` };
      }
      return client;
    } catch (error) {
      return { message: error.message };
    }
  }

  @Put(':client_id')
  async update(@Param('client_id') client_id: string, @Body() updateClientDto: UpdateClientDto) {
    try {
      const updatedClient = await this.clientsService.update(client_id, updateClientDto);
      if (!updatedClient) {
        return { message: `Client with ID ${client_id} not found` };
      }
      return updatedClient;
    } catch (error) {
      return { message: error.message };
    }
  }

  @Delete(':client_id')
  async remove(@Param('client_id') client_id: string) {
    try {
      return await this.clientsService.remove(client_id);
    } catch (error) {
      return { message: error.message };
    }
  }
}