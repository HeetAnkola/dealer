import React, { Component } from 'react'

export class Item extends Component {
  render() {
      let {title,imglink,link}=this.props;
    return (
      <div><div className="card" style={{width: "18rem"}}>
      <img src={imglink} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href={link} rel="noreferrer" target="_blank" className="btn btn-primary">Select</a>
        
      </div>
    </div></div>  
    )
  }
}

export default Item