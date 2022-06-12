import React,{useEffect} from 'react';
import Layout from '../../components/Layout';
import {useLocation} from "react-router-dom";
import axios from "axios";
import ProductsGrid from './ProductsGrid';

const Store = () => {
    const search = useLocation().search;

    useEffect(async() => {
    
        const buy = new URLSearchParams(search).get('buy')
        const email = new URLSearchParams(search).get('email')
        if(buy && email){
            const ship = await axios.get('https://shipment-services.vercel.app/api/v1/shipments');
            const shippings = ship.data.data.allShipments
            const orderId = shippings[shippings.length-1]._id 
        
              
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        const emailId = {
            email,
            orderId
        }
        const mail1 = await axios.post('https://notification-service-psi.vercel.app/api/v1/notifications/notify-order-confirmed', emailId, config);
        const mail2 = await axios.post('https://notification-service-psi.vercel.app/api/v1/notifications/notify-shipment', emailId, config);
        console.log(mail1)
        console.log(mail2)
        }
    })
    return ( 
        <Layout title="Store" description="This is the Store page" >
            <div >
                <div className="text-center mt-5">
                    <h1>RabbitMart</h1>
                    <p>This is the Store Page.</p>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;