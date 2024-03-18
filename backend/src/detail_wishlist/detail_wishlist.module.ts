import { Module } from '@nestjs/common';
import { DetailWishlistService } from './detail_wishlist.service';
import { DetailWishlistController } from './detail_wishlist.controller';

@Module({
  controllers: [DetailWishlistController],
  providers: [DetailWishlistService],
})
export class DetailWishlistModule {}
