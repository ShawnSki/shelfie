import React, { Component } from 'react';

class Form extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         url: '',
    //         name: '',
    //         price: null
    //     }
    // }
    

    // handleCancelInput = () => {
    //     this.setState({
    //         url: '',
    //         name: '',
    //         price: null
    //     })
    // }

    // handleCreateProduct = () => {
    //     axios.post('/api/product', { name: this.state.name, price: this.state.price, url: this.state.url })
    //         .then(res => {
    //             this.props.setState({
    //                 inventory: res.data
    //             })
    //         })
    // }
    // }
    


    render() {
        // console.log(this.state)
        return (
            <div>
                <h1>Form</h1>
                
                    <div>
                        <h2>Image URL:</h2>
                        <input name='url' placeholder='image url' onChange={this.props.handleUpdateInput} />
                    </div>
                    <div>
                        <h2>Product Name:</h2>
                        <input id='test' name='name' placeholder='product name' onChange={this.props.handleUpdateInput} />
                    </div>
                    <div>
                        <h2>Price:</h2>
                        <input name='price' placeholder='price' onChange={this.props.handleUpdateInput} />
                    </div>
                    <div>
                        <button>CANCEL</button>
                        <button onClick={this.props.handleAddProduct}>ADD PRODUCT</button>
                    </div>
                
            </div>
        )
    }
}

export default Form;