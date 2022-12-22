import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import styles from "../store/ProductsGrid.module.scss";
import axios from "axios";
import { useLocation } from "react-router-dom";

const AddForm = () => {
  // const  products  = useAPI();
  // console.log(products)
  const loc = useLocation();
  const category = loc.state.state;

  let url = ``;
  if (category === "clothes") {
    url = `https://outfits-api.vercel.app/createOutfit`;
  } else if (category === "tools") {
    url = `https://tools-api-five.vercel.app/createTool`;
  } else {
    url = `https://groceries-api.vercel.app/createGroceryItem`;
  }
  const [nam, setnam] = useState("");
  const [desc, setdesc] = useState("");

  function handleSubmit() {
    if (category === "clothes") {
      axios
        .post(url, {
          id: 1092837,
          name: nam,
          price: desc,
          size: "S",
          color: "red",
          season: "spring",
        })
        .then(alert(`${nam} has been added successfully`))
        .then(window.location.reload());
    } else if (category === "tools") {
      axios
        .post(url, {
          id: 1092837,
          name: nam,
          price: desc,
          weight: "heavy",
          isPowerTool: false,
        })
        .then(alert(`${nam} has been added successfully`))
        .then(window.location.reload());
    } else {
      axios
        .post(url, {
          id: 1092837,
          name: nam,
          price: desc,
          weight: 456,
          isFrozen: false,
        })
        .then(alert(`${nam} has been added successfully`))
        .then(window.location.reload());
    }
  }

  return (
    <Layout title="Home" description="This is the Store page">
      <div className={styles.p__container}>
        <div className="row">
          <div className="col-sm-8">
            <div className="py-3"> Add Product</div>
          </div>
        </div>
        <div>
          <h1>Enter Product Details</h1>

          <form style={{ display: "grid" }}>
            <label htmlFor="email">Name:</label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              onChange={(e) => setnam(e.target.value)}
              value={nam}
              required
            />

            <label htmlFor="password">Price:</label>
            <input
              type="text"
              id="password"
              onChange={(e) => setdesc(e.target.value)}
              value={desc}
              autoComplete="on"
              required
            />
          </form>

          <button variant="secondary" onClick={handleSubmit}>
            Add Product
          </button>
        </div>
        <div className={styles.p__footer}></div>
      </div>
    </Layout>
  );
};

export default AddForm;
