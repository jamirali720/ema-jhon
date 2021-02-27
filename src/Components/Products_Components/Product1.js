import './Product1.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product1 = (props) => {
    
     const { category, name,stock,  seller, price, wholePrice,img} = props.product;
    //  const {handleAddProduct} = props; // handleAddProduct has been desturctured  from props
 
        
    return (
        <div className = "items-container">
            <div className="img-div">
                <img src={img} alt=""/>
            </div>
            <div className="desc">
                <h3 className='title'>{name}</h3>     
               
                <p>Category : {category}</p>
                <p>by : {seller}</p>
                <p>Whole Price : {wholePrice}</p>
                <p>Price : $ {price}</p>
                <p><small>Only {stock} left in stock -Order soon</small></p>
                <button  className="Btn-1" onClick={ ()=> props.handleClick(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                
              
            </div>
          

           
        </div>
    );
};

export default Product1;