import React from 'react';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
        <Header/>
        <Router>
            <Switch>
                <Route exact={true} path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
