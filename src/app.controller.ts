/* eslint-disable prettier/prettier */
import { Controller, Get,Post,Header,HttpCode, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

 @Post('file')
 @UseInterceptors(FileInterceptor('image'))
uploadFile(@UploadedFile() file){
   console.log(file);
   const response ={
     originalname: file.originalname,
     filename: file.name
   };
   return response;
}



  @Post()
  //@Header('Cache-Control', 'none')
 
   signup() {
   return 'Oh Oh you have to login before';

}
}
