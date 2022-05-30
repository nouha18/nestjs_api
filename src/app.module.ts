/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { UserModule } from './user/User.module';
import {CandidacyModule} from './candidacy/Candidacy.module';
import { MulterModule } from '@nestjs/platform-express';
//import{NestjsFormDataModule} from '@nestjs/form-data';
import { AuthController } from './auth/auth.controller';

import {AuthModule} from './auth/Auth.module';
@Module({
  imports: [AuthModule,UserModule,CandidacyModule,MongooseModule.forRoot('mongodb://localhost:27017/jobdb'),MulterModule.register({dest:'./uploads'})],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}

