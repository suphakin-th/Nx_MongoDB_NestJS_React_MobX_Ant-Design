import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';

@Controller('stocks')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  async getStocks() {
    return this.stockService.findAll();
  }

  @Post()
  async createStock(@Body() createStockDto: CreateStockDto) {
    return this.stockService.create(createStockDto);
  }

  @Get(':symbol')
  async getStockQuote(@Param('symbol') symbol: string) {
    return this.stockService.getStockQuote(symbol);
  }

  @Put(':id')
  async updateStock(@Param('id') id: string, @Body() createStockDto: CreateStockDto) {
    return this.stockService.update(id, createStockDto);
  }
}

import { IsString, IsNumber } from 'class-validator';

export class CreateStockDto {
    @IsString()
    name: string;

    @IsNumber()
    quantity: number;

    @IsNumber()
    price: number;
}
