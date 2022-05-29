/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { UserModule } from './user/User.module';
import {CandidacyModule} from './candidacy/Candidacy.module';
import { MulterModule } from '@nestjs/platform-express';
//import{NestjsFormDataModule} from '@nestjs/form-data';
@Module({
  imports: [UserModule,CandidacyModule,MongooseModule.forRoot('mongodb://localhost:27017/jobdb'),MulterModule.register({dest:'./uploads'})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

