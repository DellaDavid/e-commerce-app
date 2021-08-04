import React from 'react';
import {Switch, Redirect, Route} from 'react-router';
import Footer from '../components/SharedLayout/Footer';
import Header from '../components/SharedLayout/Header';
import Cart from './Landinglayout/Cart/cart';
import IndividualProduct from './Landinglayout/IndividualProduct/IndividualProduct';
import Product from './Landinglayout/Product/product';

const LandingLayout = (props) => {
    return (
        <React.Fragment>
            <div className="d-flex flex-column p-2 landing-wrapper">
                <div className="landing-header">
                    <Header></Header>
                </div>
                <div className="landing-content">
                    <Route path="/home/product" component={Product}></Route>
                    <Route path="/home/cart" component={Cart}></Route>
                    <Route exact path={'/home/:id'} component={IndividualProduct}/>
                </div>
                <div className="landing-footer">
                    <Footer></Footer>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LandingLayout;