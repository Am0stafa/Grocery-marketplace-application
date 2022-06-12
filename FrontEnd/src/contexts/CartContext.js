import React, { createContext, useReducer } from 'react';
import { CartReducer, sumItems } from './CartReducer';
import axios from "axios";

export const CartContext = createContext()

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = { cartItems: storage, ...sumItems(storage), checkout: false };

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const increase = payload => {
        dispatch({type: 'INCREASE', payload})
    }

    const decrease = payload => {
        dispatch({type: 'DECREASE', payload})
    }

    const addProduct = payload => {
        dispatch({type: 'ADD_ITEM', payload})
    }

    const removeProduct = payload => {
        dispatch({type: 'REMOVE_ITEM', payload})
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR'})
    }

    const handleCheckout = async() => {
    //! 1)create order
    const cartI= []
    const orders = state.cartItems.map((order)=>{ 
        cartI.push({
                itemId:order._id,
                itemCount:order.quantity
        })
        return{
            items:{
                   ...cartI
                }
            }
    })
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    const res = await axios.post('https://orders-service.vercel.app/api/v1/orders/', orders, config);
    const id = res.data.data.newOrder[0]._id
    
    //! 2)call stripe api in order
        //checkout-session/:orderId
        const pay = await axios.get(
            `https://orders-service.vercel.app/api/v1/orders/checkout-session/${id}`
        );
        const link = pay.data.session.url
        window.location.replace(link)
    //! 3)create shipping
    
    
    //! 4)if successful{s=true&email=mail}send email with shipping id :this will be done in home page send the last shipping created
    
    //! 5)dispatch
        //console.log('CHECKOUT', state);
        dispatch({type: 'CHECKOUT'})
    }

    const contextValues = {
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        handleCheckout,
        ...state
    } 

    return ( 
        <CartContext.Provider value={contextValues} >
            { children }
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;
