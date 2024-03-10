import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('api/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    return await this.clientsService.create(createClientDto);
  }

  @Get()
  async findAll() {
    return await this.clientsService.findAll();
  }

  @Get(':client_id')
  async findOne(@Param('client_id') client_id: string) {
    return await this.clientsService.findOne(client_id);
  }

  @Put(':client_id')
  async update(@Param('client_id') client_id: string, @Body() updateClientDto: UpdateClientDto) {
    return await this.clientsService.update(client_id, updateClientDto);
  }

  @Delete(':client_id')
  async remove(@Param('client_id') client_id: string) {
    return await this.clientsService.remove(client_id);
  }
}
