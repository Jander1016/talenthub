import { Injectable } from '@nestjs/common';
import { CreateDetailWishlistDto } from './dto/create-detail_wishlist.dto';
import { UpdateDetailWishlistDto } from './dto/update-detail_wishlist.dto';

@Injectable()
export class DetailWishlistService {
  create(createDetailWishlistDto: CreateDetailWishlistDto) {
    return 'This action adds a new detailWishlist';
  }

  findAll() {
    return `This action returns all detailWishlist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detailWishlist`;
  }

  update(id: number, updateDetailWishlistDto: UpdateDetailWishlistDto) {
    return `This action updates a #${id} detailWishlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} detailWishlist`;
  }
}
