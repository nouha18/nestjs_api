/* eslint-disable prettier/prettier */
import {ValidationPipe} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({transform:true}));

  const config = new DocumentBuilder()
  .setTitle('Candidacy Crud Api')
  .setDescription('Nestjs api with auth jwt system')
  .setVersion('2.0.0')
  .addTag('Joby')
  .build();
 
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);

  
  await app.listen(3000);
}
bootstrap();
