import React from 'react';
import { observer } from 'mobx-react-lite';
import { Table, Button } from 'antd';
import stockStore from '../stores/StockStore';

const Portfolio = observer(() => {
    const columns = [
        {
            title: 'Symbol',
            dataIndex: 'symbol',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Action',
            render: (text, record) => (
                <Button onClick={() => stockStore.removeStock(record._id)}>Remove</Button>
            ),
        },
    ];

    return (
        <div>
            <h1>Your Stock Portfolio</h1>
            <Table dataSource={stockStore.stocks} columns={columns} />
        </div>
    );
});

export default Portfolio;
