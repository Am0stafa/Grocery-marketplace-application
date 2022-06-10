import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';
import styles from './header.module.scss';

const Header = () => {

    const {itemCount} = useContext(CartContext);

    return ( 
        <header className={styles.header}>
            <Link to='/'>Store</Link>
            <Link to='/My-Orders'>My Orders</Link>
            <Link to='/cart'> <CartIcon/> Cart ({itemCount})</Link>
        </header>
     );
}
 
export default Header;