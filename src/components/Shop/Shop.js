/* eslint-disable no-unused-vars */
import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css';
import Product from '../Product/Product';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCard = getDatabaseCart();
        const productKeys = Object.keys(savedCard);
        const previousCart = productKeys.map( existingKey => {
            const product = fakeData.find( pd => pd.key === existingKey);
            product.quantity = savedCard[existingKey];
            return product;
        })
        setCart(previousCart);
        
    }, [])

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
             count = sameProduct.quantuty + 1;
             sameProduct.quantuty = count;
             const others = cart.filter(pd => pd.key !== toBeAddedKey);
             newCart = [...others, sameProduct];
        }
        else{
            product.quantuty = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    
    return (
        <div className='twin-container'>
            <div className="product-container">
                {
                    products.map(pd => <Product
                     key = {pd.key}
                     showAddToCart = {true} handleAddProduct = {handleAddProduct} product = {pd}>
                        </Product>)
                }
            </div> 
            <div className='card-container'>
                <Cart cart = {cart}>
                    <Link to="/review"><button className="product-button">Review Order</button></Link>
                </Cart>

            </div> 
        </div>
    );
};

export default Shop;