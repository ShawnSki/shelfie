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
      inventory: []
    }
  }

  componentDidMount() {
    axios.get('/api/inventory').then((res) => {
      this.setState({
        inventory: res.data
      })
    })
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
