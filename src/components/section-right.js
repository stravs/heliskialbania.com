import React from 'react';
import Containter from 'reactstrap';
import Img from "gatsby-image";

export default class SectionRight extends React.Component {
  render() {
    return (
      <div className="row row-eq-height no-gutters">
        <div className="col-lg-6 order-lg-last">
          <Img
            alt="Logo Heliski Albania"              
            sizes={this.props.sectionImage.sizes}
            className="square" 
            style={{
              
              left: 0,
              top: 0,
              minHeight: "10rem",
              width: "auto",
              height: "100%", 
              zindex: -1,
              objectPosition: "center left"
            }}
          />
        </div>
        <div className="col-lg-6 pt-2 pb-2 px-lg-5 my-auto">
          <h1>{this.props.title}</h1>
          <p>{this.props.text}</p> 
          <h1>{this.props.titleSecond}</h1>
          <p>{this.props.textSecond}</p>  
          <p>{this.props.description}</p> 
          <p><strong>{this.props.heli}</strong></p>
          <p><strong>{this.props.includes}</strong></p>  
          <p><strong>{this.props.price}</strong></p>
          <p><strong>{this.props.priceSecond}</strong></p>
          <p><strong>{this.props.priceThird}</strong></p>
        </div>
      </div>
    );
  }
}


