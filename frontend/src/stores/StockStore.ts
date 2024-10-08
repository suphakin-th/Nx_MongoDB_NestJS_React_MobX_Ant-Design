import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class StockStore {
  stocks = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchStocks() {
    const response = await axios.get('/api/stocks');
    this.stocks = response.data;
  }

  async fetchStockQuote(symbol: string) {
    const response = await axios.get(`/api/stocks/${symbol}`);
    return response.data;
  }
}

export const stockStore = new StockStore();
