import React from 'react';

const IndividualProduct = (props) => {
    console.log(props)
    return(
        <React.Fragment>
            <p>IndividualProduct Screen</p>
            <p>{props.location.pathname}</p>
        </React.Fragment>
    )
}

export default IndividualProduct;