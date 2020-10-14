import React from 'react';
import HomePage from "./pages/homepage/homepage.component";
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const HatsPage = () => (
    <div>
        <h1>Hats page</h1>
    </div>
)

function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route exact={true} path="/" component={HomePage} />
                <Route path="/shop/hats" component={HatsPage} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
