import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let totalPrice = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        totalPrice = totalPrice + product.price;
    }

    let shippingCost = 0;
    if(totalPrice > 35){
        shippingCost = 0;
    }
    else if(totalPrice > 15){
        shippingCost = 4.99;
    }
    else if(totalPrice > 0){
        shippingCost = 12.99;
    }
    // const tax = Math.round(totalPrice/10);
    const tax = (totalPrice/10);
    const grandTotal = (totalPrice + shippingCost + tax);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary:</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(totalPrice)}</p>
            <p>Shipping Cost: {shippingCost}</p>
            <p>Tax + Vat: {tax}</p>
            <p>Totla Price: {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;