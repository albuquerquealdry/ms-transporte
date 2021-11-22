import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeliveryDocument = Delivery & Document;

@Schema()
export class Delivery {
  @Prop()
  name: string;

  @Prop()
  numberP: number;

  @Prop()
  numberC: string;

  @Prop()
  cep: string;

  @Prop()
  type: string;
}
export const DeliverySchema = SchemaFactory.createForClass(Delivery);
