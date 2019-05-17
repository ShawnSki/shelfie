import React, { Component } from 'react';
import './Product.css'

class Product extends Component {
    render() {
        // console.log(this.props.productObj)
        const {name, price, url} = this.props.productObj
        return (
            <div className='container'>
                <div>
                    <img src={url} className='imgBox' />
                </div>
                <div className='textContainer'>
                    <h1>{name}</h1>
                    <h2>{price}</h2>
                </div>
            </div>
        )
    }
}


export default Product;