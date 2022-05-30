/* eslint-disable prettier/prettier */
import {Injectable} from '@nestjs/common'
import {Strategy,ExtractJwt} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import { request } from 'https';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt'){
constructor(){
    super({
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration:false,
        secretOrKey:'super-cat',
     })
}
async validate( payload: any){
   // request.user=payload;
   console.log('validate', payload);
   //{userId:payload.sub,username:payload.username}
   return payload;
}




}

