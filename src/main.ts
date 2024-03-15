import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  config(); // Cargar variables de entorno desde el archivo .env

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
