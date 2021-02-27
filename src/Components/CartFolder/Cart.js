import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    
    // const total = cart.reduce((total, prd) => total + prd.price , 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price
    }
    let shipping = 0;
    if (total>35 && total< 60) {
        shipping = total * 0.10;

    }
    else if (total> 0 && total <=35) {
        shipping = total * 0.05;

    }
    else {
        shipping = 0;
    }
    let tax = (total * 0.10).toFixed(2);
    let changeTax= Number(tax);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);

    }
    return (
        <div>
         <h4>Items Ordered : {cart.length}</h4>
         <p>Product Price : {formatNumber(total)}</p>
         <p>Shipping Cost : {formatNumber(shipping)}</p>
         <p>Vat + Tax : {tax}</p>
         <p>Total price : {total + shipping + changeTax}</p>
        </div>
    );
};

export default Cart;