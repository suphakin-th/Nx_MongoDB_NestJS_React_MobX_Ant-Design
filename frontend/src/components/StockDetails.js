import React from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import stockStore from '../stores/StockStore';

const StockDetails = observer(() => {
    const { id } = useParams();
    const stock = stockStore.stocks.find((s) => s._id === id);

    if (!stock) return <div>Loading...</div>;

    return (
        <div>
            <h1>{stock.name} ({stock.symbol})</h1>
            <p>Quantity: {stock.quantity}</p>
            <p>Price: ${stock.price}</p>
            {/* Add logic to fetch latest quote here */}
        </div>
    );
});

export default StockDetails;
