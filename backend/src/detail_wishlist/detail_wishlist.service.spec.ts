import { Test, TestingModule } from '@nestjs/testing';
import { DetailWishlistService } from './detail_wishlist.service';

describe('DetailWishlistService', () => {
  let service: DetailWishlistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailWishlistService],
    }).compile();

    service = module.get<DetailWishlistService>(DetailWishlistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
