import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase } = useCart();

    const isInCart = product => {
        return !!cartItems.find(item => item._id === product._id);
    }

    return ( 
        <div className="card card-body">
            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" 
            src={product.image} alt="img"/>
            <p>{product.name}</p>
            <p>Description:{product.description}</p>
            <h3 className="text-left">{formatNumber(product.price)}</h3>
            <div className="text-right">
                <Link  to="/" className="btn btn-link btn-sm mr-2">Details</Link>

                {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-sm">Add more</button>
                }

                {
                    isInCart(product) && <button 
                    onClick={() => addProduct(product)}
                    className="btn btn-primary btn-sm">Add to cart</button>
                }
                
            </div>
        </div>
     );
}
 
export default ProductItem;