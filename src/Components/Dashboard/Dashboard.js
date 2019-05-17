import React, { Component } from 'react';

import Product from '../Product/Product'

class Dashboard extends Component {
    render() {
        // console.log(this.props.inventoryList)
        const inventoryMapped = this.props.inventoryList.map((productObj, ind) => {
            return (
                <Product key={ind}
                    productObj={productObj}/>
            )
        })
        return (
            <div>
                <div>Dashboard</div>
                {inventoryMapped}
            </div>
        )
    }
}

export default Dashboard;