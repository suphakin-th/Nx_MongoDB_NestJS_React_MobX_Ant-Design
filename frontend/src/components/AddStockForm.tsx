import React from 'react';
import { Form, Input, Button } from 'antd';

const AddStockForm = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    // Call API to add stock
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="symbol" label="Stock Symbol" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="quantity" label="Quantity" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Add Stock</Button>
      </Form.Item>
    </Form>
  );
};

export default AddStockForm;
