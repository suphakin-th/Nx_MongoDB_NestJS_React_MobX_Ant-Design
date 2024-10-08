import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Stock extends Document {
  @Prop({ required: true })
  symbol: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;
}

export const StockSchema = SchemaFactory.createForClass(Stock);
