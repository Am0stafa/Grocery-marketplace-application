import React, { useState, useEffect } from "react";

import ProductItem from "./ProductItem";
import styles from "./ProductsGrid.module.scss";
import { useAPI } from "../../contexts/ProductsContext";
import axios from "axios";

const ProductsGrid = () => {
  const url = `https://outfits-api.vercel.app/outfits`;
  // const  products  = useAPI();
  // console.log(products)
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
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
          <ProductItem key={product._id} product={product}>
            {url}
          </ProductItem>
        ))}
      </div>
      <div className={styles.p__footer}></div>
    </div>
  );
};

export default ProductsGrid;
