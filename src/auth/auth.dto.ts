/* eslint-disable prettier/prettier */
import {IsEmail,IsString,IsNotEmpty,MaxLength} from 'class-validator';

export class AuthDto{

      
    @MaxLength(25)
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password:string;

}