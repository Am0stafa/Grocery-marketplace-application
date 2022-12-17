import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";
import axios from "axios";

import DefaultPage from "./defaultPage";

const Default = () => {
  const loc = useLocation();
  let Category = loc.state.state;
  if (Category === "user") Category = "Home";

  return (
    <div>
      <div className="text-center mt-5">
        <h1>{Category}</h1>
        <p>This is the {Category} Page.</p>
      </div>
      <DefaultPage />
    </div>
  );
};

export default Default;
