import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../CartFolder/Cart';
import Product1 from '../Products_Components/Product1';

import './Shop.css';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState ([]);
    

  const handleClick = (product) => {
      const newCart = [...cart, product];
      setCart (newCart)
  }
  
    return (
        
        <div className="shop-container">
            <div className= "produdcts-names">
                {
                    products.map(pd=> <Product1  product={pd} handleClick ={handleClick} ></Product1>)
                }
            
               
            </div> 
        .     <div className="products-card">
                <Cart cart ={cart}></Cart>

            </div>                 
        </div>
                        
                    
                
                
      
    );
};

export default Shop;
