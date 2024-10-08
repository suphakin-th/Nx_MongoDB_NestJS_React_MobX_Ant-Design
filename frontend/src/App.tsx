import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PortfolioPage from './components/PortfolioPage';
import StockDetailPage from './components/StockDetailPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/stocks/:symbol" component={StockDetailPage} />
    </Switch>
  </Router>
);

export default App;
