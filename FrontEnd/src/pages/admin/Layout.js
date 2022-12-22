import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "../../components/shared/header.module.scss";
import "bootswatch/dist/lux/bootstrap.css";

const Layout = ({ title, description, children }) => {
  const history = useHistory();
  return (
    <>
      <Helmet>
        <title>
          {title ? title + " - React Boilerplate" : "React.js Boilerplate"}
        </title>
        <meta
          name="description"
          content={description || "React.js Boilerplate"}
        />
      </Helmet>
      <header className={styles.header}>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/default/admin", { state: "admin" })}
        >
          Go back
        </a>

        <Link to="/">Logout</Link>
      </header>
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
