/* eslint-disable prettier/prettier */
import {Schema,SchemaFactory,Prop } from '@nestjs/mongoose';
import { ObjectId,Document} from 'mongoose';
import {Transform} from 'class-transformer';

export type  CandidacyDocument = Candidacy & Document;
@Schema()
export class Candidacy{

@Transform(({value}) =>value.toString())
_id : ObjectId;
    
@Prop()
title!: string;

@Prop({unique: true})
description!: string;

@Prop()
employeename!: string;

@Prop()
cv_file!: string;

}

export const CandidacySchema = SchemaFactory.createForClass(Candidacy);