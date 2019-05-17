import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            url: '',
            name: '',
            price: null
        }
    }
    handleUpdateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCancelInput = () => {
        this.setState({
            url: '',
            name: '',
            price: null
        })
    }


    render() {
        // console.log(this.state)
        return (
            <div>
                <h1>Form</h1>
                <div>
                    <h2>Image URL:</h2>
                    <input name='url' placeholder='image url' onChange={this.handleUpdateInput} />
                </div>
                <div>
                    <h2>Product Name:</h2>
                    <input name='name' placeholder='product name' onChange={this.handleUpdateInput} />
                </div>
                <div>
                    <h2>Price:</h2>
                    <input name='price' placeholder='price' onChange={this.handleUpdateInput} />
                </div>
                <div>
                    <button onClick={this.handleCancelInput}>CANCEL</button>
                    <button>ADD PRODUCT</button>
                </div>
            </div>
        )
    }
}

export default Form;