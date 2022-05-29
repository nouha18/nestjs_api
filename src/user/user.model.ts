/* eslint-disable prettier/prettier */
import {Schema,SchemaFactory,Prop } from '@nestjs/mongoose';
import { ObjectId,Document} from 'mongoose';
import {Transform} from 'class-transformer';

export type  UserDocument = User & Document;
@Schema()
export class User{

@Transform(({value}) =>value.toString())
_id : ObjectId;
    
@Prop()
username!: string;

@Prop({unique: true})
email!: string;

@Prop()
password!: string;

@Prop()
phone!: string;

}

export const UserSchema = SchemaFactory.createForClass(User);