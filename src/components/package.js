import React from 'react';
import Containter from 'reactstrap';
import Img from "gatsby-image";

export default class Package extends React.Component {
  render() {
    return (
      <div className="col-lg-6 p-5 my-auto">
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p> 
        <p>{this.props.heli}</p>
        <p>{this.props.includes}</p>  
        <p>{this.props.price}</p>
        <p>{this.props.priceSecond}</p>
        <p>{this.props.priceThird}</p>
      </div>
    );
  }
}