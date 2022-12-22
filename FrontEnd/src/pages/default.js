import React from "react";
import { useLocation } from "react-router-dom";
import Home from "./home";
import CustomerService from "./customer_service";
import Admin from "./admin";

const Default = () => {
  const loc = useLocation();

  let category = loc.state.state;

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

export default Default;
