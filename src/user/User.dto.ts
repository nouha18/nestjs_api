/* eslint-disable prettier/prettier */
import {IsEmail,IsString,IsNotEmpty,MaxLength} from 'class-validator';

export class UserDto{

     @IsString()
     @IsNotEmpty()
     @MaxLength(15)
    username:string;
      
    @MaxLength(25)
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password:string;

    @MaxLength(25)
    @IsString()
    phone:string;
}