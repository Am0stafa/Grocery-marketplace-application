import React from "react";
import { useLocation } from "react-router-dom";

const AddForm = () => {
  const loc = useLocation();
  const action = loc.state.state;
  return <div>{action}</div>;
};

export default AddForm;
