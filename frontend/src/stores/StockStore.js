import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class StockStore {
    stocks = [];

    constructor() {
        makeAutoObservable(this);
        this.fetchStocks();
    }

    async fetchStocks() {
        const response = await axios.get('http://localhost:3000/stocks');
        this.stocks = response.data;
    }

    async addStock(stock) {
        await axios.post('http://localhost:3000/stocks', stock);
        this.fetchStocks();
    }

    async updateStock(id, stock) {
        await axios.put(`http://localhost:3000/stocks/${id}`, stock);
        this.fetchStocks();
    }

    async removeStock(id) {
        await axios.delete(`http://localhost:3000/stocks/${id}`);
        this.fetchStocks();
    }
}

const stockStore = new StockStore();
export default stockStore;
