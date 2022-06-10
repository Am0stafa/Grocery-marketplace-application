import React, { useState, useEffect } from 'react';


import ProductItem from './ProductItem';
import styles from './ProductsGrid.module.scss';
import { useAPI } from '../../contexts/ProductsContext'
import axios from "axios";

const ProductsGrid = () => {

    // const  products  = useAPI();
    // console.log(products)
    const [products,setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
        try{
          const data  = await axios.get(
            `https://inventory-service.vercel.app/api/v1/products`
          );
          setProducts(data.data.data.allProducts);
          console.log(data.data)
        } catch (error) {
          console.log(error);
        }
        }
        fetchData();
      }, []);

    return ( 
        <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {products.length} Products
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="text" name="" placeholder="Search product" className="form-control" id=""/>
                    </div>
                </div>
            </div>
            <div className={styles.p__grid}>

                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }

            </div>
            <div className={styles.p__footer}>

            </div>
        </div>
     );
}
 
export default ProductsGrid;