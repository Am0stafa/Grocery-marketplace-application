import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { formatNumber } from "../../helpers/utils";

const ProductItem = ({ product, children }) => {
  const ul = children[1].substr(0, children[1].lastIndexOf("/"));
  const url = ul.concat("/", `${product._id}`);
  console.log(url);
  const itemId = `${product._id}`;
  function doSmth() {
    axios
      .delete(url, { params: { id: itemId } })
      .then(alert(`${product.name} has been deleted`))
      .then(window.location.reload());
  }

  return (
    <div className="card card-body">
      <img
        style={{ display: "block", margin: "0 auto 10px", maxHeight: "200px" }}
        className="img-fluid"
        src={product.image}
        alt="img"
      />
      <p>{product.name}</p>
      <p>Description:{product.description}</p>
      <h3 className="text-left">{formatNumber(product.price)}</h3>
      <div className="text-right">
        <button className="btn btn-" onClick={doSmth}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
