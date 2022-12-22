import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { CartIcon } from "../icons";
import styles from "./header.module.scss";

const Header = () => {
  const { itemCount } = useContext(CartContext);
  const history = useHistory();
  return (
    <header className={styles.header}>
      <a
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/default/user", { state: "user" })}
      >
        Home
      </a>
      <Link to="/My-Orders">My Orders</Link>
      <Link to="/cart">
        {" "}
        <CartIcon /> Cart ({itemCount})
      </Link>
      <a
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/user/complain", { state: "user" })}
      >
        Complain
      </a>
      <Link to="/">Logout</Link>
    </header>
  );
};

export default Header;
