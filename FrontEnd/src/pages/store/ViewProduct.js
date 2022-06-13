import React, { useEffect,useState }  from 'react';
import styles from './ProductsGrid.module.scss';
import ProductItem from './ProductItem';
import { useParams } from 'react-router-dom';
import { formatNumber } from '../../helpers/utils';
import "./ViewProduct.css"
import axios from 'axios';
const ViewProduct = () => {
const {id} = useParams()
const [products,setProducts] = useState([]);
    useEffect(() => {
        console.log("run")
        async function fetchData() {
        try{
          const data  = await axios.get(
            `https://inventory-service.vercel.app/api/v1/products/${id}`
          );
          setProducts(data.data.data);
          console.log(data.data.data)
        } catch (error) {
          console.log(error);
        }
        }
        fetchData();
        console.log("run")

      }, []);

  return (
    <div className="card hamada card-body">
            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" 
            src={products.image} alt="img"/>
            <p>{products.name}</p>
            <p>Description:{products.description}</p>
            <h3 className="text-left">{formatNumber(products.price)}</h3>
            <div className="text-right">
      </div>
    </div>
  )
}
 
export default ViewProduct;
