import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockModule } from './stock/stock.module';
import { ConfigModule } from './config/config.module'; // Import your ConfigModule

@Module({
  imports: [
    ConfigModule, // Add the ConfigModule here
    MongooseModule.forRoot(process.env.MONGO_URI as string),
    StockModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
