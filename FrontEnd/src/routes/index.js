import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Store from "../pages/store";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Cart from "../pages/cart";
import ViewProduct from "../pages/store/ViewProduct";
import Login from "../pages/Login";
import Default from "../pages/default";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/My-Orders" component={About} />
        <Route path="/Store" component={Store} />
        <Route path="/Default" component={Default} />
        <Route path="/cart" component={Cart} />
        <Route path="*" component={NotFound} />
        <Route path="/ViewProduct/:id" component={ViewProduct} />
      </Switch>
    </Router>
  );
};

export default Routes;
