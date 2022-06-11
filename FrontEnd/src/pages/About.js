import React,{useState,useEffect} from 'react';
import Layout from '../components/Layout';
import { GitHubIcon} from '../components/icons'
import "./myOrder.css";
import axios from "axios";
const About = () => {
 

    const [orderId,setOrderID] = useState('')
    const [search, setSearch] = useState('')


    useEffect(() => {
        async function fetchData() {
            try{
              const data  = await axios.get(
                `https://shipment-services.vercel.app/api/v1/shipments/${orderId}`
              );
              console.log(data.data.data);
            } catch (error) {
              console.log(error);
            }
        }
            fetchData();
    
    },[orderId])

    const handleAddContactFormSubmit = (e) => {
        e.preventDefault();
        const ID = e.target.value;
        setOrderID(ID)
      
      
      console.log(orderId)
      }
      const handleAddFormChange = (event) => {
      console.log(event.target.value)
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
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>@mdo</td>
                        <td>
                            <button className='buttonsInTable'>Cancel</button>
        
        
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>bdjvo</td>
                        <td></td>
                        <td></td>
                        <td>
                            <button className='buttonsInTable'>Cancel</button>
        
        
                        </td>
                    </tr>
                    <tr>
                        <td>hchvkwv</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button className='buttonsInTable'>Cancel</button>
        
        
                        </td>
                    </tr>
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
      <form className='myform' onSubmit={handleAddContactFormSubmit}>
        <input
          required placeholder="Enter Product ID"
          type="text"
          name="Order-ID"
          //required="required"
          value={orderId}
          onChange={handleAddFormChange}
        />
        <button type="submit" className='bttn'>click here</button>
    </form>

    {menu}


  
  
    
  </div>
  )
}
 
export default About;