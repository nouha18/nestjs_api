/* eslint-disable prettier/prettier */
import { Controller ,Body,Post,Res} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
@Controller('auth')
export class AuthController {
constructor(private readonly authService: AuthService,jwtService: JwtService){}

@Post('/signin')
signinLocal(@Res() response,@Body('email') email :string,@Body('password') password :string){
    const saltedRound =36;
    const hashedpass = bcrypt.hash(password,saltedRound);
    return this.authService.signin(email,hashedpass);
}



}
