import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetailWishlistService } from './detail_wishlist.service';
import { CreateDetailWishlistDto } from './dto/create-detail_wishlist.dto';
import { UpdateDetailWishlistDto } from './dto/update-detail_wishlist.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('detail-wishlist')
@Controller('api/v1/detail-wishlist')
export class DetailWishlistController {
  constructor(private readonly detailWishlistService: DetailWishlistService) {}

  @Post()
  create(@Body() createDetailWishlistDto: CreateDetailWishlistDto) {
    return this.detailWishlistService.create(createDetailWishlistDto);
  }

  @Get()
  findAll() {
    return this.detailWishlistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detailWishlistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetailWishlistDto: UpdateDetailWishlistDto) {
    return this.detailWishlistService.update(+id, updateDetailWishlistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailWishlistService.remove(+id);
  }
}
