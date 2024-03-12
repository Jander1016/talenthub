import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './clients/entities/client.entity';
import { ServicesModule } from './services/services.module';
import { Service } from './services/entities/service.entity';
import { AdminsModule } from './admins/admins.module';
import { TalentsModule } from './talents/talents.module';
import { StacksModule } from './stacks/stacks.module';
import { TalentsStacksModule } from './talents_stacks/talents_stacks.module';
import { WishlistsModule } from './wishlists/wishlists.module';
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
      entities:[Client, Service],
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
