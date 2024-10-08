import { Injectable, HttpService } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stock } from './schemas/stock.schema';
import { CreateStockDto } from './dto/create-stock.dto';

@Injectable()
export class StockService {
  constructor(
    @InjectModel(Stock.name) private stockModel: Model<Stock>,
    private httpService: HttpService,
  ) {}

  async findAll(): Promise<Stock[]> {
    return this.stockModel.find().exec();
  }

  async create(createStockDto: CreateStockDto): Promise<Stock> {
    const createdStock = new this.stockModel(createStockDto);
    return createdStock.save();
  }

  async getStockQuote(symbol: string): Promise<any> {
    const response = await this.httpService.get(`https://api.example.com/quote?symbol=${symbol}`).toPromise();
    return response.data;
  }

  async update(id: string, createStockDto: CreateStockDto): Promise<Stock> {
    return this.stockModel.findByIdAndUpdate(id, createStockDto, { new: true });
  }
}
