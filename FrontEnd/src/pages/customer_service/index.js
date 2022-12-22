import React from "react";
import Complaint from "../../components/complaint";
import complaints from "../../components/dummy-comp";
import "./hi.css";
import { Link, useHistory } from "react-router-dom";

const CustomerService = () => {
  console.log(Complaint[0]);
  return (
    <div>
      <div>
        <Link to="/">Logout</Link>
      </div>
      <div>
        <h1> All Complaints</h1>
      </div>
      <div
        style={{
          display: "flex",
          margin: "1em",
          justifyContent: "space-around",
        }}
      >
        {complaints.map((complaint) => (
          <div className="carbody">
            <h2>{complaint.id}</h2>
            <h2>{complaint.title}</h2>
            <h2>{complaint.description}</h2>
          </div>
        ))}
      </div>

      <Complaint />
    </div>
  );
};

export default CustomerService;
