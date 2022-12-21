import React from "react";
import Layout from "./Layout";
import { Link, useHistory } from "react-router-dom";
import clothes from "./clothes.png";
import tools from "./tools.png";
import groceries from "./groceries.png";
import { useLocation } from "react-router-dom";

const FormFactory = () => {
  const loc = useLocation();
  const children = loc.state.state;
  if (children === "remove") children = "delete";
  const history = useHistory();
  function factory(category) {
    // console.log(category);
    history.push(`/default/admin/${children}Form/${category}`, {
      state: category,
    });
  }

  return (
    <Layout title="Home" description="This is the Store page">
      <div>
        <div className="text-center mt-5">
          <h1>What do you want to {children}</h1>

          <div style={{ display: "flex" }}>
            <div
              className="card card-body"
              style={{ width: "500px", margin: "2em" }}
            >
              <img
                style={{
                  display: "block",
                  margin: "0 auto 10px",
                  maxHeight: "200px",
                }}
                className="img-fluid"
                src={groceries}
                alt="img"
              />

              <button
                className="btn btn-link btn-sm mr-2"
                style={{ fontSize: "20px" }}
                onClick={() => factory("groceries")}
              >
                Groceries
              </button>
            </div>

            <div
              className="card card-body"
              style={{ width: "500px", margin: "2em" }}
            >
              <img
                style={{
                  display: "block",
                  margin: "0 auto 10px",
                  maxHeight: "200px",
                }}
                className="img-fluid"
                src={clothes}
                alt="img"
              />

              <button
                className="btn btn-link btn-sm mr-2"
                style={{ fontSize: "20px" }}
                onClick={() => factory("clothes")}
              >
                Clothes
              </button>
            </div>

            <div
              className="card card-body"
              style={{ width: "500px", margin: "2em" }}
            >
              <img
                style={{
                  display: "block",
                  margin: "0 auto 10px",
                  maxHeight: "200px",
                }}
                className="img-fluid"
                src={tools}
                alt="img"
              />

              <button
                className="btn btn-link btn-sm mr-2"
                style={{ fontSize: "20px" }}
                onClick={() => factory("tools")}
              >
                Tools
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FormFactory;
