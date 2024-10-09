import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { Stock, StockSchema } from './stocks.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Stock.name, schema: StockSchema }]),
    ],
    providers: [StocksService],
    controllers: [StocksController],
    exports: [StocksService],
})
export class StocksModule {}
