import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { stockStore } from '../stores/StockStore';
import { Card } from 'antd';

const StockDetailPage = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const [quote, setQuote] = useState<any>(null);

  useEffect(() => {
    stockStore.fetchStockQuote(symbol).then(setQuote);
  }, [symbol]);

  return (
    <Card title={`Stock: ${symbol}`}>
      {quote ? (
        <div>
          <p>Price: {quote.price}</p>
          <p>Volume: {quote.volume}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Card>
  );
};

export default StockDetailPage;
