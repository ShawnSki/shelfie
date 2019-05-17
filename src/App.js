import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';


class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
      url: '',
      name: '',
      price: null
    }
  }

  componentDidMount() {
    this.handleGetInventory()
  }

  handleGetInventory() {
    axios.get('/api/inventory').then((res) => {
      this.setState({
        inventory: res.data
      })
    })
  }

  handleUpdateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddProduct = (e) => {
    e.preventDefault();
    axios.post('/api/product', {
      name: this.state.name,
      price: this.state.price,
      url: this.state.url
    })
      .then((res) => {
        this.setState({
          inventory: res.data
        })
        this.handleGetInventory();
      })
      .catch(error => {
        console.log(error)
      })
  }

 

  render() {
    // console.log(this.state.inventory)
    return (
      <div className="App">
        <Header />
        <div className='contentContainer'>
          <Dashboard inventoryList={this.state.inventory} />
          <Form
            handleAddProduct={this.handleAddProduct}
            handleUpdateInput={this.handleUpdateInput} />
        </div>
      </div>
    );
  }
}

export default App;
