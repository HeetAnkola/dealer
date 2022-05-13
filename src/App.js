
import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import ItemType from './Component/ItemType';


export class App extends Component {
  render() {
    return (
      <div class="position-relative">
      <Navbar/>
      <ItemType/> 
         <div class="position-absolute bottom-0 end-0"></div>
        <strong>Disclosure</strong>: Hi I'm amazon associate. The product which you guys buys i will get commission on that as an advertisement fee and also i'm not the seller you guys will purchase only from amazon only. As an amazon associate i earn from qualifying purchases.<strong>#CommissionEarned</strong>
      </div>
    )
  }
}

export default App
