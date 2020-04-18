import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from './../../fakeData/index';
import Cart from './../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import {Link} from 'react-router-dom';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    // face some error const {cart, setCart} = useState([]);
    const [ cart, setCart, product ] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() =>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map( key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
        //console.log(cartProducts);
    }, []);

    let thankYou;
    if(orderPlaced){

        thankYou = <img src={happyImage} />
    }
    return (
        <div className = "twin-container">
            <div className = "product-container">
            {
                cart.map(pd => <ReviewItem 
                    key = {pd.key}
                    removeProduct = {removeProduct}
                    product={pd}>
                    </ReviewItem> )
            }
            {
                thankYou
            }
            </div>
            <div className = "cart-container">
                <Cart cart={cart}>
                <Link to="/review"><button onClick = {handlePlaceOrder} className="product-button">Place Order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;