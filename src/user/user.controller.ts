/* eslint-disable prettier/prettier */
import { Controller,Get,Post,Res,Param,Body,Delete,Patch, HttpStatus } from '@nestjs/common';
import { response } from 'express';
import { UserService } from './user.service';
import {UserDto} from './User.dto';
@Controller('user')
export class UserController {
constructor(private readonly userService: UserService){}


@Get('')
startrouting(){
  return 'routes for user';
}

@Post('new')
register(@Res() response,@Body('username') username: string, @Body('email') email: string, @Body('password') password: string, @Body('phone') phone : string):any{
 try{
    const newuser = this.userService.createnewUser(username, email, password, phone);
    return response.status(HttpStatus.CREATED).json({message:'user has been created !'});
 }catch(err){
 return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:err.message});
 }
}

@Post('dto')
registeruser(@Res() response,@Body() userDto: UserDto):any{
 try{
    const newuser = this.userService.createnewUser(userDto.username,userDto.email,userDto.password,userDto.phone);
    return response.status(HttpStatus.CREATED).json({message:'user has been created !'});
 }catch(err){
 return response.status(HttpStatus.EXPECTATION_FAILED).json({message:err.message});
 }
}

@Get('all')
getlist(@Res() response):Promise<any[]>{
    const list = this.userService.getAll();
    console.log(list);
    return response.status(HttpStatus.OK).json({message:list});
}

//6293925713a703d47680ff7f

@Get('one/:id')
getoneById(@Res() response, @Param('id') id : string):Promise<any>{
const user = this.userService.getByID(id);
console.log(user);
return response.status(301).json({message: 'OK'});
}


@Delete('delete/:id')
deleteuser(@Res() response, @Param('id') id : string){
const user = this.userService.deleteUser(id.toString());
console.log(user);

}

@Patch('patch/:id')
updateUser(@Res() response, @Param('id') id : string,@Body('username') username: string, @Body('email') email : string,@Body('password')password :string,@Body('phone')phone : string  ){
const user = this.userService.updateUser(id,username,email,password,phone);
console.log(user);
return response.status(302).json({message:'user found and updated'});
}

@Get('one')
getHello(): string {
  return this.userService.getHello();
}
}
