import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Store from '../pages/store';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Cart from "../pages/cart";
import ViewProduct from "../pages/store/ViewProduct";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route path="/My-Orders" component={About} />
          <Route exact path="/" component={Store}/>
          <Route path="/cart" component={Cart} />
          <Route path="/ViewProduct/:id" component={ViewProduct} />
        </Switch>
    </Router>
  );
}

export default Routes;