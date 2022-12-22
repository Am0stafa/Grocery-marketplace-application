import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddForm from "../pages/admin/AddForm";
import UpdateForm from "../pages/admin/UpdateForm";
import DeleteForm from "../pages/admin/DeleteForm";
import Store from "../pages/store";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Cart from "../pages/cart";
import ViewProduct from "../pages/store/ViewProduct";
import Login from "../pages/Login";
import Default from "../pages/default";
import FormFactory from "../pages/admin/FormFactory";
import complaint from "../components/complaint";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/default/admin/FormFactory" component={FormFactory} />
        <Route path="/default/admin/addForm" component={AddForm} />
        <Route path="/default/admin/deleteForm" component={DeleteForm} />
        <Route path="/default/admin/updateForm" component={UpdateForm} />
        <Route path="/My-Orders" component={About} />
        <Route path="/Store" component={Store} />
        <Route path="/Default" component={Default} />
        <Route path="/user/complain" component={complaint} />
        <Route path="/cart" component={Cart} />
        <Route path="*" component={NotFound} />
        <Route path="/ViewProduct/:id" component={ViewProduct} />
      </Switch>
    </Router>
  );
};

export default Routes;
