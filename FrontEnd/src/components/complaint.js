import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { useLocation } from "react-router-dom";

const Complaint = () => {
  const loc = useLocation();
  const typpe = loc.state.state;
  console.log(typpe);
  const [nam, setnam] = useState("");
  const [desc, setdesc] = useState("");

  function handleClick() {
    alert("Submitted");
    window.location.reload();
  }

  if (typpe === "user") {
    return (
      <Layout title="Home" description="This is the Store page">
        <div>
          <div className="row">
            <div className="col-sm-8">
              <div className="py-3"> Complain</div>
            </div>
          </div>
          <div>
            <h1>Enter Complaint Details</h1>

            <form style={{ display: "grid" }}>
              <label htmlFor="email">Title:</label>
              <input
                type="text"
                id="email"
                autoComplete="off"
                onChange={(e) => setnam(e.target.value)}
                value={nam}
                required
              />

              <label htmlFor="password">Description:</label>
              <input
                type="text"
                id="password"
                onChange={(e) => setdesc(e.target.value)}
                value={desc}
                autoComplete="on"
                required
              />
            </form>

            <button variant="secondary" onClick={handleClick}>
              Submit Complaint
            </button>
          </div>
          <div></div>
        </div>
      </Layout>
    );
  }
  return (
    <div>
      <div className="row">
        <div className="col-sm-8">
          <div className="py-3"> Respond to complaint</div>
        </div>
      </div>
      <div>
        <form style={{ display: "grid" }}>
          <label htmlFor="email">id:</label>
          <input
            type="text"
            id="email"
            autoComplete="off"
            onChange={(e) => setnam(e.target.value)}
            value={nam}
            required
          />

          <label htmlFor="password">Response:</label>
          <input
            type="text"
            id="password"
            onChange={(e) => setdesc(e.target.value)}
            value={desc}
            autoComplete="on"
            required
          />
        </form>

        <button variant="secondary" onClick={handleClick}>
          Submit response
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Complaint;
