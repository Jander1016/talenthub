import { PartialType } from '@nestjs/mapped-types';
import { CreateDetailWishlistDto } from './create-detail_wishlist.dto';

export class UpdateDetailWishlistDto extends PartialType(CreateDetailWishlistDto) {}
