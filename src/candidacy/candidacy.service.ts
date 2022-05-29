/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CandidacyDocument } from './candidacy.model';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()
export class CandidacyService {
    constructor(@InjectModel('Candidacy') private readonly candyModel: Model<CandidacyDocument>){}


    async createjoby(title: string, description: string,employeename:string,cvfile:string){
     try{
      const newpost = await new this.candyModel({
          title: title,
          description: description,
          employeename:employeename,
          cvfile:cvfile
      });
      newpost.save();
      console.log(newpost);
      return newpost;
     }catch(error){
      return error;
     }
    }

async update(id: string, title:string, description: string, employeename: string){
    const updated = await this.candyModel.findByIdAndUpdate({_id:id},{title:title, description:description,employeename:employeename},{new:true});
     console.log(updated); 
    return updated;
 }

async getById(id:string){
    const user = await this.candyModel.findById({_id:id});
    console.log(user);
    return user;
}

async getAll(){
    const user = await this.candyModel.find();
    console.log(user);
    return user;
}

async getandDelete(id:string){
    const user = await this.candyModel.findByIdAndDelete({_id:id});
    console.log(user);
    return user;
}
}
