import React, { useEffect, useState } from 'react';
import { phonedata } from '../../../data/phonedata';

// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link, useHistory } from "react-router-dom";

const Product = () => {
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
    const history = useHistory();
    // const { id } = useParams();

    const handleChange = (event) => {
        if (event.target.checked) {
            setselectedBrandArray([
                ...selectedBrandArray,
                event.target.value
            ]);
          } else {
            setselectedBrandArray(selectedBrandArray.filter(brand => brand !== event.target.value));
          }
    }

    useEffect(() => {
        if (selectedBrandArray.length === 0) {
            setSelectedProduct(phonedata);
          } else {
            setSelectedProduct(
                phonedata.filter(phone => selectedBrandArray.some(brand => phone.brand.toLowerCase() === brand.toLowerCase())))
          }
        }, [selectedBrandArray]);

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
                                            onChange={handleChange}/>
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

                                   {/* <a href={`/home/product/${phone.id}`} className="product-title">
                                        {phone.title}
                                   </a> */}
                                   <h5>
                                    <Link className="product-title" 
                                          to={`/home/${phone.id}`}>{phone.title}</Link>
                                   </h5>
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