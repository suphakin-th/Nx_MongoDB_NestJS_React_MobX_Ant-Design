import React from 'react';
import 'antd/dist/antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import StockDetails from './components/StockDetails';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/stock/:id" element={<StockDetails />} />
        </Routes>
    </Router>
);

export default App;
