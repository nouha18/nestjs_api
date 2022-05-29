/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import {UserSchema,UserDocument,User} from './user.model';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose'
@Injectable()
export class UserService {
constructor(@InjectModel('User') private readonly userModule: Model<UserDocument>){}

async createnewUser(username:string,email:string,password:string,phone:string){
try{

    const newuser = await new this.userModule({
        username: username,
        email: email,
        password: password,
        phone: phone
    });
    newuser.save()
    console.log(newuser);
    return newuser;
}catch(error){
    return error;
}

}

 async getAll (){
    const list = await this.userModule.find().exec();
    console.log(list);
         return list as User[];
  }

async getByID(id){
    const user = await this.userModule.findById({_id:id}).exec();
    console.log(user);
    
}
getHello(): string {
    return 'test routes!';
  }

  async deleteUser(id :string){
      const user = await this.userModule.findByIdAndDelete({_id:id});
     console.log(user)
  }

  async  updateUser(id:string,username:string,email:string,password:string,phone:string){
     try{
const updated = await this.userModule.findByIdAndUpdate({_id:id},{username:username,email:email,password:password},{new:true})
    console.log(updated);
}catch(error){
         console.log(error)
         return error;
     }     
  }
}
