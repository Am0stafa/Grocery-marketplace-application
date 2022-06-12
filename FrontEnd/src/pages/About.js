import React,{useState,useEffect} from 'react';
import Layout from '../components/Layout';
import { GitHubIcon} from '../components/icons'
import "./myOrder.css";
import axios from "axios";
import styles from ".//cart/styles.css";
const About = () => {
 

    const [orderId,setOrderID] = useState('')
    const [ship, setShip] = useState([])
    const [totalCount, setTotalCount] = useState()
    let array = [];

    useEffect(() => {
        async function fetchData() {
            try{
            
              const data  = await axios.get(
                `https://shipment-services.vercel.app/api/v1/shipments/${orderId}`
              );
              if(data.data.data)
                array.push(data.data.data)
                setShip([...array]);

                const id = array[0].orderID
                const ftorder = await axios.get(
                  `https://orders-service.vercel.app/api/v1/orders/${id}`
                );
                console.log(ftorder.data.data)
                const orders  = ftorder.data.data
                const tot = orders.items.reduce(
                  (sum, item) => sum + item.itemCount,
                  0
                );
                setTotalCount(tot)
            
            } catch (error) {
              console.log(error);
            }
        }
            fetchData();
            console.log("run");

    },[orderId])

      const cancelOrder = async()=>{
        const shipID = ship[0]._id
        const cancel = await axios.get(
          `https://shipment-services.vercel.app/api/v1/shipments/${shipID}/delete`
        );
        console.log(cancel.data.data)
        let ar = [];
        ar.push(cancel.data.data)
        
        setShip(ar)
      
      }
      
      
      const handleAddFormChange = (event) => {
        event.preventDefault();
    
        setOrderID(event.target.value)
      };
      
      
      let menu;
      if (isNaN(orderId)) {
        menu = (
    <>
            <h2 className='orders'>Orders:</h2>
    
            <table>
                <thead>
                    <tr>
                        <th>Shipping Status</th>
                        <th>Name </th>
                        <th>Quantity</th>
                        <th>Address</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>{
                
                  ship && ship.map((s) => (
                    <tr>
                    <td>{s.shipmentStatus}</td>
                    <td>{s.orderID}</td>
                    <td>{totalCount}</td>
                    <td>{s.address}</td>
                    <td>
                        <button className='buttonsInTable' onClick={cancelOrder}>Cancel</button>
    
    
                    </td>
                  </tr>
                  ))
                
                }
                </tbody>
            </table>
        
          
            
            </>  
        );
      }else{
        menu = (
            <></>
        )
      }
      
  return (
    <div className = "myOrderPage">
      <p className='Title'>My Orders:</p>
      <form className='myform'>
        <input
          required placeholder="Enter Product ID"
          type="text"
          name="Order-ID"
          //required="required"
          value={orderId}
          onChange={handleAddFormChange}
        />
    </form>

    {menu}


  
  
    
  </div>
  )
}
 
export default About;