import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  config();

  const app = await NestFactory.create(AppModule);
  
  

  await app.listen(3000);
}

bootstrap();
