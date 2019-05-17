import React, { Component } from 'react';

class Product extends Component {
    render() {
        // console.log(this.props.productObj)
        const {name, price, url} = this.props.productObj
        return (
            <div>
                <div>
                    <img src={url} width='300' height='200' />
                </div>
                <div>
                    <h1>{name}</h1>
                    <h2>{price}</h2>
                </div>
            </div>
        )
    }
}

export default Product;