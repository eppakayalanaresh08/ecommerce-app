import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './Components/ProductsList'
import ProductDetails from './Components/ProductsDetails';
import './App.css'
import Header from './Components/Header';
const App = () => {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/product/:id" component={ProductDetails} />
        </Switch>
    </Router>
  );
};

export default App;
