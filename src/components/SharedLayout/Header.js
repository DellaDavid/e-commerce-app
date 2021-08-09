import React from 'react';

const Header = () => {
    return(
        <React.Fragment>
            <div className="header-wrapper">
                <ul>
                    <li className="header-ecommerce">
                        <a href="/home/product">E-commerce</a>
                    </li>
                    <li className="header-cart">
                        <a href="/home/cart">Cart</a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Header;