import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  config();

  const app = await NestFactory.create(AppModule);
  
  
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, // Esta opción controla si se permite o no el envío de propiedades no definidas en tu DTO. Si está habilitada, solo se permitirán las propiedades definidas explícitamente en tu DTO. Cualquier propiedad adicional será eliminada automáticamente antes de que se pase al controlador. Esto ayuda a evitar que se pasen datos no deseados o inesperados a tu aplicación.
    })
  );
//En resumen, app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true })) configura un ValidationPipe global que se aplicará a todas las solicitudes entrantes en tu aplicación NestJS. Este pipe se encargará de validar y transformar automáticamente las solicitudes entrantes según las reglas especificadas, lo que te ayuda a mantener tus controladores limpios y centrados en la lógica de negocio.
  await app.listen(3000);
}

bootstrap();
