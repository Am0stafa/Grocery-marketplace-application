import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "./home";
import CustomerService from "./customer_service";
import Admin from "./admin";

const DefaultPage = () => {
  const loc = useLocation();
  if (!loc.state) {
    return (
      <>
        <Home />
      </>
    );
  }
  const category = loc.state.state;
  // const  products  = useAPI();
  // console.log(products)

  if (category === "user") {
    return (
      <>
        <Home />
      </>
    );
  } else if (category === "admin") {
    return (
      <>
        <Admin />
      </>
    );
  } else if (category === "customer_service") {
    return (
      <>
        <CustomerService />
      </>
    );
  }
};

export default DefaultPage;
