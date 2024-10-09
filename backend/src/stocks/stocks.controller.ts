import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { Stock } from './stocks.schema';

@Controller('stocks')
export class StocksController {
    constructor(private readonly stocksService: StocksService) {}

    @Post()
    create(@Body() stock: Stock) {
        return this.stocksService.create(stock);
    }

    @Get()
    findAll() {
        return this.stocksService.findAll();
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() stock: Stock) {
        return this.stocksService.update(id, stock);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.stocksService.remove(id);
    }
}
