import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stock, StockDocument } from './stocks.schema';

@Injectable()
export class StocksService {
    constructor(@InjectModel(Stock.name) private stockModel: Model<StockDocument>) {}

    async create(stock: Stock): Promise<Stock> {
        const newStock = new this.stockModel(stock);
        return newStock.save();
    }

    async findAll(): Promise<Stock[]> {
        return this.stockModel.find().exec();
    }

    async update(id: string, stock: Stock): Promise<Stock> {
        return this.stockModel.findByIdAndUpdate(id, stock, { new: true }).exec();
    }

    async remove(id: string): Promise<Stock | null> { // Update return type
        return this.stockModel.findByIdAndDelete(id).exec(); // Use findByIdAndDelete
    }
}
