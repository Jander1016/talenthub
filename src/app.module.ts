import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './clients/entities/client.entity';
import { ServicesModule } from './services/services.module';
import { Service } from './services/entities/service.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',//or 127.0.0.1
      port:3306,
      username:'root',
      password:'Espapo1986+',
      database:'db_talenthub',
      entities:[Client],
      synchronize:true
    }),


    ClientsModule,


    ServicesModule],
    
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
