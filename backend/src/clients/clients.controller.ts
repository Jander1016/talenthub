import { Controller, Get, Post, Body, Param, Delete,  UsePipes, ValidationPipe, Patch } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
// import { ClientValidationPipe } from '../pipes/client-validation.pipe';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('clients')
@Controller('api/v1/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  // @UsePipes(new ValidationPipe()) // Utiliza el ValidationPipe proporcionado por NestJS
  create(@Body() createClientDto: CreateClientDto) {
    try {
      const client = this.clientsService.create(createClientDto);
      return client 
    } catch (error) {
      return { message: error.message };
    }
  }

  @Get()
  findAll() {
    try {
      return this.clientsService.findAll();
    } catch (error) {
      return { message: error.message };
    }
  }

  @Get(':client_id')
   findOne(@Param('client_id') client_id: string) {
    try {
      const client = this.clientsService.findOne(client_id);
      if (!client) {
        return { message: `Client with ID ${client_id} not found` };
      }
      return client;
    } catch (error) {
      return { message: error.message };
    }
  }

  @Patch(':client_id')
  @UsePipes(new ValidationPipe()) // Utiliza el ValidationPipe proporcionado por NestJS
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
      await this.clientsService.remove(client_id);
      return { message: `Client with ID ${client_id} has been successfully deleted` };
    } catch (error) {
      return { message: error.message };
    }
  }
}
