import React from 'react';
import Review from './../Review/Review';

const ReviewItem = (props) => {
    //console.log(props); 
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginButtom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <button className="product-button" onClick = { () => props.removeProduct(key)} >Remove</button>
        </div>
    );
};

export default ReviewItem;