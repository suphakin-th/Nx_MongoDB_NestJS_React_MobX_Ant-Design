import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Table } from 'antd';
import { stockStore } from '../stores/StockStore';

const PortfolioPage = observer(() => {
  useEffect(() => {
    stockStore.fetchStocks();
  }, []);

  const columns = [
    { title: 'Symbol', dataIndex: 'symbol' },
    { title: 'Price', dataIndex: 'price' },
    { title: 'Quantity', dataIndex: 'quantity' },
  ];

  return <Table dataSource={stockStore.stocks} columns={columns} />;
});

export default PortfolioPage;
