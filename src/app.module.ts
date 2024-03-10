import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'Espapo1986+',
      database:'db_talenthub '
    }),
    ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
