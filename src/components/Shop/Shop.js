/* eslint-disable no-unused-vars */
import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        //console.log('Product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(prod => <Product           handleAddProduct = {handleAddProduct}   product={prod}>
                        </Product>)
                }
            </div>
            <div className='card-container'>
                <Cart cart = {cart}></Cart>

            </div> 
        </div>
    );
};

export default Shop;