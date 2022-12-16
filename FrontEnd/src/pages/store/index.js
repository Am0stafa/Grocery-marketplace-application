import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductsGrid from "./ProductsGrid";
import ToolsGrid from "./ToolsGrid";
import GroceriesGrid from "./GroceriesGrid";
import ClothesGrid from "./ClothesGrid";

const Store = () => {
  const search = useLocation().search;

  useEffect(() => {
    const buy = new URLSearchParams(search).get("buy");
    const email = new URLSearchParams(search).get("email");
    if (buy && email) {
      const sendMail = async () => {
        const ship = await axios.get(
          "https://shipment-services.vercel.app/api/v1/shipments"
        );
        const shippings = ship.data.data.allShipments;
        const orderId = shippings[shippings.length - 1]._id;

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const emailId = {
          email,
          orderId,
        };
        const mail1 = await axios.post(
          "https://notification-service-psi.vercel.app/api/v1/notifications/notify-order-confirmed",
          emailId,
          config
        );

        console.log(mail1);
      };
      sendMail();
    }
  }, [search]);

  const loc = useLocation();
  const category = loc.state.state;

  if (category === "clothes") {
    return (
      <Layout title="Store" description="This is the Store page">
        <div>
          <div className="text-center mt-5">
            <h1>RabbitMart</h1>
            <p>This is the Store Page.</p>
          </div>
          <ClothesGrid />
        </div>
      </Layout>
    );
  } else if (category === "tools") {
    return (
      <Layout title="Store" description="This is the Store page">
        <div>
          <div className="text-center mt-5">
            <h1>RabbitMart</h1>
            <p>This is the Store Page.</p>
          </div>
          <ToolsGrid />
        </div>
      </Layout>
    );
  } else if (category === "groceries") {
    return (
      <Layout title="Store" description="This is the Store page">
        <div>
          <div className="text-center mt-5">
            <h1>RabbitMart</h1>
            <p>This is the Store Page.</p>
          </div>
          <GroceriesGrid />
        </div>
      </Layout>
    );
  }
};

export default Store;
