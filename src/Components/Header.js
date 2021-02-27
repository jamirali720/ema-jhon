import React from 'react';
import logo from "../images/logo.png";

const Header = () => {
    return (
        <div className="header">
        <img src={logo} alt=""/>
            <nav>
                <a href="/shop">shop</a>
                <a href="/review">Order Revivew</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;

