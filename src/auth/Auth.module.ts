/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserSchema} from '../user/user.model';
import {MongooseModule} from '@nestjs/mongoose';
import {JwtStrategy} from './strategy/strategy';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [JwtModule.register({secret:'super-cat'}),MongooseModule.forFeature([{name:'User',schema:UserSchema}])],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
})
export class AuthModule {}
