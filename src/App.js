
import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import ItemType from './Component/ItemType';

export class App extends Component {
  render() {
    return (
      <div><Navbar/>
      <ItemType/>
      </div>
    )
  }
}

export default App
