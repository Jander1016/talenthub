import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('api/admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  async create(@Body() createAdminDto: CreateAdminDto) {
    try {
      return await this.adminsService.create(createAdminDto);
    } catch (error) {
      return { message: error.message };
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.adminsService.findAll();
    } catch (error) {
      return { message: error.message };
    }
  }

  @Get(':admin_id')
  async findOne(@Param('admin_id') admin_id) {
    try {
      const admin = await this.adminsService.findOne(admin_id);
      if (!admin) {
        return { message: `Admin with ID ${admin_id} not found` };
      }
      return admin;
    } catch (error) {
      return { message: error.message };
    }
  }

  @Put(':admin_id')
  async update(@Param('admin_id') admin_id, @Body() updateAdminDto: UpdateAdminDto) {
    try {
      const updatedAdmin = await this.adminsService.update(admin_id, updateAdminDto);
      if (!updatedAdmin) {
        return { message: `Admin with ID ${admin_id} not found` };
      }
      return updatedAdmin;
    } catch (error) {
      return { message: error.message };
    }
  }

  @Delete(':admin_id')
  async remove(@Param('admin_id') admin_id: string) {
    try {
      const id = parseInt(admin_id, 40); // Convert admin_id from string to number
      await this.adminsService.remove(id);
      return { message: `The admin with ID ${id} has been successfully deleted` };
    } catch (error) {
      return { message: error.message };
    }
  }
}