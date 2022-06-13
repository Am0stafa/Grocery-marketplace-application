import React, { useState } from "react";
import ReactDOM from "react-dom";
import CartItem from './CartItem';
import { useCart } from '../../hooks/useCart';
import styles from "./styles.css";


const CartProducts = () => {
    const { cartItems } = useCart();
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const database = [
        {
          username: "user1",
          password: "pass1"
        },
        {
          username: "user2",
          password: "pass2"
        }
      ];
    
      const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };
    
      const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { uname, pass } = document.forms[0];
        console.log(uname.value)
        console.log(pass.value)

      };

      const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );

      const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Email </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Address </label>
              <input type="text" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );
    
    

    return ( 
        <div className={styles.p__container}>
            
            <div className="card card-body border-0">
            
                {
                    cartItems.map(product =>  <CartItem key={product._id} product={product}/>)
                }
            
            </div>
            <div className="app">
                <div className="login-form">
                    <div className="title">Sign In</div>
                            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
                </div>
            
            </div>
        </div>
     );
}
 
export default CartProducts;