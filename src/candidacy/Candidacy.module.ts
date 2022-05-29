/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CandidacyController } from './candidacy.controller';
import { CandidacyService } from './candidacy.service';
import {Candidacy,CandidacySchema} from './candidacy.model';
import {MongooseModule} from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [MongooseModule.forFeature([{name:Candidacy.name,schema:CandidacySchema}]),MulterModule.register({dest:'./uploads'})],
  controllers: [CandidacyController],
  providers: [CandidacyService],
})
export class CandidacyModule {}

