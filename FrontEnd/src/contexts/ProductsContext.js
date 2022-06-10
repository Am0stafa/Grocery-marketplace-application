import React, { useState,useContext, useEffect, createContext } from 'react';
import { dummyProducts } from '../services/dummy';


import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
    try{
      const data  = await axios.get(
        `https://inventory-service.vercel.app/api/v1/products`
      );
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
    }
    fetchData();
  }, []);
  return (
    <APIContext.Provider
      value={{
        products
      }}
    >
      {children}
    </APIContext.Provider>
  );
}





export function useAPI() {

    const context = useContext(APIContext);
  
    return context;
}
 
