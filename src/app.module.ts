import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';

import { Admin } from './admins/entities/admin.entity';
import { AdminsModule } from './admins/admins.module';

import { Talent } from './talents/entities/talent.entity';
import { TalentsModule } from './talents/talents.module';

import { Client } from './clients/entities/client.entity';
import { ClientsModule } from './clients/clients.module';

import { Service } from './services/entities/service.entity';
import { ServicesModule } from './services/services.module';

import { Stack } from './stacks/entities/stack.entity';
import { StacksModule } from './stacks/stacks.module';

import { TalentsStack } from './talents_stacks/entities/talents_stack.entity';
import { TalentsStacksModule } from './talents_stacks/talents_stacks.module';

import { Wishlist } from './wishlists/entities/wishlist.entity';
import { WishlistsModule } from './wishlists/wishlists.module';

import { DetailWishlist } from './detail_wishlist/entities/detail_wishlist.entity';
import { DetailWishlistModule } from './detail_wishlist/detail_wishlist.module';

config(); // Cargar variables de entorno desde el archivo .env


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any, // Si no da error. Conversión explícita a cualquier tipo
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Admin, Talent, Stack, TalentsStack, Service, Client, Wishlist, DetailWishlist], // Agrega aquí las demás entidades necesarias
      synchronize: false
    }),

    Admin,
    AdminsModule,

    Talent,
    TalentsModule,

    Stack,
    StacksModule,

    TalentsStack,
    TalentsStacksModule,

    Service,
    ServicesModule,

    Client,
    ClientsModule,

    Wishlist,
    WishlistsModule,

    DetailWishlist,
    DetailWishlistModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
