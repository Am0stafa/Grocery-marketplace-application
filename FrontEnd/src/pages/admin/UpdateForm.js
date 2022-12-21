import React, { useState, useEffect } from "react";
import Layout from "./Layout";

import UpdateItem from "./UpdateItem";
import styles from "../store/ProductsGrid.module.scss";
import { useAPI } from "../../contexts/ProductsContext";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UpdateForm = () => {
  // const  products  = useAPI();
  // console.log(products)
  const loc = useLocation();
  const category = loc.state.state;
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  let url = ``;
  if (category === "clothes") {
    url = `https://outfits-api.vercel.app/outfits`;
  } else if (category === "tools") {
    url = `https://tools-api-five.vercel.app/tools`;
  } else {
    url = `https://groceries-api.vercel.app/groceries`;
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get(url);
        setProducts(data.data.data);
        setSearch(data.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const onchange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value !== "")
      setSearch(products.filter((p) => p.name === e.target.value));
    else setSearch([...products]);
  };

  return (
    <Layout title="Home" description="This is the Store page">
      <div className={styles.p__container}>
        <div className="row">
          <div className="col-sm-8">
            <div className="py-3">{products.length} Products</div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <input
                type="text"
                name=""
                placeholder="Search product"
                className="form-control"
                id=""
                onChange={onchange}
              />
            </div>
          </div>
        </div>
        <div className={styles.p__grid}>
          {search.map((product) => (
            <UpdateItem key={product._id} product={product}>
              {" "}
              {url}
            </UpdateItem>
          ))}
        </div>
        <div className={styles.p__footer}></div>
      </div>
    </Layout>
  );
};

export default UpdateForm;
