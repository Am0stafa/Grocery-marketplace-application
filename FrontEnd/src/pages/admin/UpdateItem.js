import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { formatNumber } from "../../helpers/utils";
import { Modal, Button, Form } from "react-bootstrap";

const ProductItem = ({ product, children }) => {
  const [show, setShow] = useState(false);
  const [nam, setnam] = useState("");
  const [desc, setdesc] = useState("");
  const handleShow = () => setShow(true);
  const handleSho = () => setShow(false);

  const ul = children[1].substr(0, children[1].lastIndexOf("/"));
  const url = ul.concat("/", `${product._id}`);
  console.log(url);
  const itemId = `${product._id}`;
  function handleSubmit() {
    console.log(desc);
    axios
      .patch(url, { id: itemId, name: nam, price: desc })
      .then(alert(`${product.name} has been updated`))
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
        {/* <button  onClick={doSmth}> */}

        <Button className="btn btn-" onClick={handleShow}>
          Update
        </Button>

        <Modal show={show}>
          <Modal.Header onClick={handleSho} closeButton>
            <Modal.Title>Enter New Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form style={{ display: "grid" }}>
              <label htmlFor="email">New Name:</label>
              <input
                type="text"
                id="email"
                autoComplete="off"
                onChange={(e) => setnam(e.target.value)}
                value={nam}
                required
              />

              <label htmlFor="password">New Price:</label>
              <input
                type="text"
                id="password"
                onChange={(e) => setdesc(e.target.value)}
                value={desc}
                autoComplete="on"
                required
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleSubmit}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ProductItem;
