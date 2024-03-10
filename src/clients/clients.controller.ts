import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('api/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    const client = this.clientsService.create(createClientDto);
    return client;
  }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('client_id') client_id: string) {
    return this.clientsService.findOne(client_id);
  }
}

  @Put(':client_id')
  update(@Param('client_id') client_id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Delete(':client_id')
  remove(@Param('client_id') id: string) {
    return this.clientsService.remove(+id);
  }

