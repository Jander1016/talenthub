import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';


import { Admin } from './admins/entities/admin.entity'
import { AdminsModule } from './admins/admins.module';

import { Talent } from './talents/entities/talent.entity';
import { TalentsModule } from './talents/talents.module';

import { Client } from './clients/entities/client.entity';
import { ClientsModule } from './clients/clients.module';

import { Service } from './services/entities/service.entity';
import { ServicesModule } from './services/services.module';


import { Stack } from './stacks/entities/stack.entity';
import { StacksModule } from './stacks/stacks.module';

import { TalentsStack } from './talents_stacks/entities/talents_stack.entity'; //substacks
import { TalentsStacksModule } from './talents_stacks/talents_stacks.module'; //substacks

import { Wishlist } from './wishlists/entities/wishlist.entity';
import { WishlistsModule } from './wishlists/wishlists.module';

import { DetailWishlist } from './detail_wishlist/entities/detail_wishlist.entity';
import { DetailWishlistModule } from './detail_wishlist/detail_wishlist.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',//or 127.0.0.1
      port:3306,
      username:'root',
      password:'Espapo1986+',
      database:'db_talenthub',
      entities:[Client, Service, Talent, Stack, Wishlist, DetailWishlist ],
      synchronize:true
    }),


    ClientsModule,


    ServicesModule,


    AdminsModule,


    TalentsModule,


    StacksModule,


    TalentsStacksModule,


    WishlistsModule,


    DetailWishlistModule],
    
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
