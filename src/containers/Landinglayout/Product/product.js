import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { phonedata } from '../../../data/phonedata';
// import actions from '../../../store/actions';
// import { addToCart } from '../../../store/actions/addToCartAction';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";


const Product = (props) => {
    const brands = [
        {
            label: 'Apple',
            value: 'Apple',
            name: 'Apple'
        },
        {
            label: 'Samsung',
            value: 'Samsung',
            name: 'Samsung'
        },{
            label: 'Asus',
            value: 'Asus',
            name: 'Asus'
        },{
            label: 'Huawei',
            value: 'Huawei',
            name: 'Huawei'
        },{
            label: 'Meizu',
            value: 'Meizu',
            name: 'Meizu'
        },
        ,{
            label: 'Vestel',
            value: 'Vestel',
            name: 'Vestel'
        }
        
    ]

    const [selectedBrandArray,setselectedBrandArray] = useState([]);
    const [selectedProduct,setSelectedProduct] = useState([]);
    const [cart,setCart] = useState([]);

    const cartData = useSelector(state => state);
    console.log(cartData);

    const dispatch = useDispatch();
    
    const selectBrandHandler = (event) => {
        if (event.target.checked) {
            setselectedBrandArray([
                ...selectedBrandArray,
                event.target.value
            ]);
          } else {
            setselectedBrandArray(selectedBrandArray.filter(brand => brand !== event.target.value));
          }
    }
    // filter and display phones based on checkbox selection
    useEffect(() => {
        if (selectedBrandArray.length === 0) {
            setSelectedProduct(phonedata);
          } 
        else {
            setSelectedProduct(
              phonedata.filter(phone => selectedBrandArray.some(brand => phone.brand.toLowerCase() === brand.toLowerCase())))
          }
        }, [selectedBrandArray]);
    
    // add to cart functionality
    // const toCart = (phone) => {
    //     dispatch(actions.addToCart(setCart(phone)))
    //     // setCart(phonedata.filter(phone => phone.id == phoneId));
    // }
    // console.log(cart);

    return(
        <React.Fragment>
            <div className="d-flex bd-highlight">
                <div className=" w-25 landing-navbar">
                    {
                        brands.map((brand) => {
                            return(
                                <div className="check-box" key={brand.label}>
                                    <label className="checkbox-label">
                                        {brand.label}
                                        <input type="checkbox"
                                            name={brand.name}
                                            value={brand.value}
                                            onChange={selectBrandHandler}/>
                                        <span></span>
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-75 landing-scroll-content overflow-auto">
                    {
                        selectedProduct.map((phone) => {
                            return(
                                <div className="w-30 product-list" key={phone.title}>
                                    <h5 className="product-brand">
                                        {phone.brand.toUpperCase()}
                                    </h5>
                                    <img className="product-images" src={phone.images[0]} alt="phone"/>

                                    {/* {
                                        phone.images.map((image) => {
                                            <img src={image[0]} alt="phone"/>
                                        })
                                    } */}
                                    {/* <div className="carousel-wrapper">
                                        <Carousel>
                                            <img className="product-images" src={phone.images[0]}/>
                                            <img className="product-images" src={phone.images[1]}/>
                                            <img className="product-images" src={phone.images[2]}/>
                                        </Carousel>
                                    </div> */}
                                   <h5>
                                        <a className="product-title" 
                                        href={`/home/product/${phone.id}`}>{phone.title}</a>
                                   </h5>
                                    <button type="button" 
                                        className="btn btn-dark"
                                        onClick={() => dispatch({type: "ADD_TO_CART",payload: phone})}>
                                       Add to Cart
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
        </React.Fragment>
    )
}

export default Product;