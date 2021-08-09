import React from 'react';

const IndividualProduct = (props) => {
    console.log("Individual Screen");
    console.log(props);

    return(
        <React.Fragment>
            <p>Selected Product Screen</p>
            <p>{props.location.pathname}</p>
        </React.Fragment>
    )
}

export default IndividualProduct;