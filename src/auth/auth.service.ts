/* eslint-disable prettier/prettier */
import { Injectable, Post,UnauthorizedException } from '@nestjs/common';
import{UserDocument } from '../user/user.model';
import {Model} from'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {AuthDto} from './auth.dto'
@Injectable()
export class AuthService {

    constructor(@InjectModel('User') private readonly userModule:Model<UserDocument>) {}



    signin(dto : AuthDto){
        //retreive user
        const user = this.userModule.find((_user) => _user.email == dto.email);
        console.log(user);
        if(!user){
        throw new  UnauthorizedException('no user with this email');
        }
        if(user.password !== dto.password){
        throw new  UnauthorizedException('erroned credential ');
        }
        //return this.signUser(user.id,user.email,'user');
        return "ok"
        }
   


}
