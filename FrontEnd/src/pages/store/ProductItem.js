import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../helpers/utils";

const ProductItem = ({ product, children }) => {
  const temp = children.substr(children.lastIndexOf("/") + 1);
  const { addProduct, cartItems, increase } = useCart();

  const isInCart = (product) => {
    return !!cartItems.find((item) => item._id === product._id);
  };
  if (temp == "outfits") {
    return (
      <div className="card card-body">
        <img
          style={{
            display: "block",
            margin: "0 auto 10px",
            maxHeight: "200px",
          }}
          className="img-fluid"
          src={product.image}
          alt="img"
        />
        <p>{product.name}</p>
        <p>Size:{product.size}</p>
        <h3 className="text-left">{formatNumber(product.price)}</h3>
        <div className="text-right">
          <Link
            to={{
              pathname: `/ViewProduct/${product._id}`,
              className: "btn btn-link btn-sm mr-2",
              // state: {
              //     instructor_id: [{product}],
              // },
            }}
          >
            click here
          </Link>

          {isInCart(product) && (
            <button
              onClick={() => increase(product)}
              className="btn btn-outline-primary btn-sm"
            >
              Add more
            </button>
          )}

          {!isInCart(product) && (
            <button
              onClick={() => addProduct(product)}
              className="btn btn-primary btn-sm"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    );
  } else if (temp == "tools") {
    return (
      <div className="card card-body">
        <img
          style={{
            display: "block",
            margin: "0 auto 10px",
            maxHeight: "200px",
          }}
          className="img-fluid"
          src={product.image}
          alt="img"
        />
        <p>{product.name}</p>
        <p>Weight:{product.weight}</p>
        <h3 className="text-left">{formatNumber(product.price)}</h3>
        <div className="text-right">
          <Link
            to={{
              pathname: `/ViewProduct/${product._id}`,
              className: "btn btn-link btn-sm mr-2",
              // state: {
              //     instructor_id: [{product}],
              // },
            }}
          >
            click here
          </Link>

          {isInCart(product) && (
            <button
              onClick={() => increase(product)}
              className="btn btn-outline-primary btn-sm"
            >
              Add more
            </button>
          )}

          {!isInCart(product) && (
            <button
              onClick={() => addProduct(product)}
              className="btn btn-primary btn-sm"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    );
  } else if (temp == "groceries") {
    return (
      <div className="card card-body">
        <img
          style={{
            display: "block",
            margin: "0 auto 10px",
            maxHeight: "200px",
          }}
          className="img-fluid"
          src={product.image}
          alt="img"
        />
        <p>{product.name}</p>
        <p>Frozen:{product.isFrozen.toString()}</p>
        <h3 className="text-left">{formatNumber(product.price)}</h3>
        <div className="text-right">
          <Link
            to={{
              pathname: `/ViewProduct/${product._id}`,
              className: "btn btn-link btn-sm mr-2",
              // state: {
              //     instructor_id: [{product}],
              // },
            }}
          >
            click here
          </Link>

          {isInCart(product) && (
            <button
              onClick={() => increase(product)}
              className="btn btn-outline-primary btn-sm"
            >
              Add more
            </button>
          )}

          {!isInCart(product) && (
            <button
              onClick={() => addProduct(product)}
              className="btn btn-primary btn-sm"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    );
  }
};

export default ProductItem;
