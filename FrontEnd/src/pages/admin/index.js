import React from "react";
import Layout from "./Layout";
import { Link, useHistory } from "react-router-dom";
import add from "./add.jpg";
import update from "./update.jpg";
import remove from "./delete.png";

const Admin = () => {
  const history = useHistory();
  function factory(action) {
    // console.log(category);
    history.push(`/default/admin/FormFactory/${action}`, { state: action });
  }

  return (
    <Layout title="Home" description="This is the Store page">
      <div>
        <div className="text-center mt-5">
          <h1>What do you want to do?</h1>

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
                src={add}
                alt="img"
              />

              <button
                className="btn btn-link btn-sm mr-2"
                style={{ fontSize: "20px" }}
                onClick={() => factory("add")}
              >
                Add products
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
                src={update}
                alt="img"
              />

              <button
                className="btn btn-link btn-sm mr-2"
                style={{ fontSize: "20px" }}
                onClick={() => factory("update")}
              >
                Update products
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
                src={remove}
                alt="img"
              />

              <button
                className="btn btn-link btn-sm mr-2"
                style={{ fontSize: "20px" }}
                onClick={() => factory("delete")}
              >
                Delete products
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
