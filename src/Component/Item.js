import React, { Component } from 'react'

export class Item extends Component {
  render() {
      let {title,imglink,link}=this.props;
    return (
      <div><div class="card" style={{width: "18rem"}}>
      <img src={imglink} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <a href={link} rel="noreferrer" target="_blank" class="btn btn-primary">Select</a>
        
      </div>
    </div></div>  
    )
  }
}

export default Item