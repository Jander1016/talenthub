import { Test, TestingModule } from '@nestjs/testing';
import { DetailWishlistController } from './detail_wishlist.controller';
import { DetailWishlistService } from './detail_wishlist.service';

describe('DetailWishlistController', () => {
  let controller: DetailWishlistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailWishlistController],
      providers: [DetailWishlistService],
    }).compile();

    controller = module.get<DetailWishlistController>(DetailWishlistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
