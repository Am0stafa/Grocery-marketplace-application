import React,{useState} from 'react';
import Layout from '../components/Layout';
import { GitHubIcon} from '../components/icons'
import "./myOrder.css";

const About = () => {
 

    const [orderId,setorderID] = useState()

    const handleAddContactFormSubmit = (e) => {
        e.preventDefault();
        const ID = e.target.value;
        setorderID(ID)
      
      
      console.log(orderId)
      }
      const handleAddFormChange = (event) => {
        event.preventDefault();
    
        setorderID(event.target.value)
      };
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


    <h2 className='orders'>Orders:</h2>
    
    <table>
        <thead>
            <tr>
                <th>Order Status</th>
                <th>Name </th>
                <th>Quantity</th>
                <th>Total Price</th>
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

    <h2 className='orders'>Shipments:</h2>

    <table>
        <thead>
            <tr>
                <th>Order ID</th>
                <th>Shipping Status </th>
                <th>Address</th>
                
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td>vljb</td>
                <td></td>
                
                
            </tr>
            <tr>
                <td></td>
                <td>bdjvo</td>
                <td></td>
                
                
            </tr>
            <tr>
                <td>hchvkwv</td>
                <td></td>
                <td></td>
                
                
            </tr>
        </tbody>
    </table>


    


  
  
  
  </div>
  )
}
 
export default About;