/* eslint-disable prettier/prettier */
import { Controller,Res,Get,Param,Post,Body,HttpStatus,HttpCode,UseInterceptors, Delete, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { response } from 'express';
import {CandidacyService} from './candidacy.service';
@Controller('joby')
export class CandidacyController {

    constructor(private readonly CandidacyService: CandidacyService){}

    @Get('job')
    fetchroute(): string{
        return "routes for candidacy";
    }

    @Post('new')
    createCandidacy(@Res() response, @Body('title') title: string, @Body('description') desc: string,@Body('employeename') employee: string, cvfile: string){
     try{
     const newpost = this.CandidacyService.createjoby(title,desc, employee, cvfile);
     console.log(newpost);
     return response.status(HttpStatus.CREATED).json({message:'poste created !'});
     }catch(error){
        return response.status(HttpStatus.BAD_REQUEST).json({message:'try again!',error: error});
    }
  }

  @Get('all')
  getallposts(@Res() response):Promise<any[]>{
try{
 const list = this.CandidacyService.getAll();
 console.log(list);
 return  response.status(301).json({message:'list fetched!'});

}catch(err){
  return response.status(HttpStatus.BAD_REQUEST).json({message:"try again",error:err});
}
  }
  

  @Get(':id')
  getById(@Res() response, @Param('id') id : string):Promise<any>{
   const data = this.CandidacyService.getById(id);
   console.log(data);
   return response.status(200).json({message:'post found !'})
  }

  @Delete('rm')
  removedata(@Res()res, @Param('id') id : string){
      const data = this.CandidacyService.getandDelete(id);
      console.log(data);
      return data;
  }
//npm i nestjs-form-data
  @Post('withcv')
  
  @UseInterceptors(FileInterceptor('image'))
 uploadFile(@Res() res, @Body('title') title: string, @Body('description') desc: string,@Body('employeename') employee: string, cvfile: string,@UploadedFile() file){
   console.log(file);
    const response ={
      originalname: file.originalname,
      filename: file.name
    };
    try{
        const newpost = this.CandidacyService.createjoby(title,desc, employee,response.originalname);
        console.log(newpost);
        return res.status(HttpStatus.CREATED).json({message:'poste created !'});
        }catch(error){
           return res.status(HttpStatus.BAD_REQUEST).json({message:'try again!',error: error});
       }
 }
}
