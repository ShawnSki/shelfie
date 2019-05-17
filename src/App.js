import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';


class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [
        {
          name: 'product 1',
          price: 1000,
          url: 'https://www.santacruzbicycles.com/files/chain_slapper.jpg'
        },
        {
          name: 'product 2',
          price: 2000,
          url: 'https://www.santacruzbicycles.com/files/internal_routing.jpg'
        }
      ]
    }
  }


  render() {
    // console.log(this.state.inventory)
    return (
      <div className="App">
        <Header />
        <Dashboard inventoryList={this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
