import React from 'react';
import Containter from 'reactstrap';
import Img from "gatsby-image";

export default class Section extends React.Component {
  render() {
    return (

      <div className="col">
        <Img
          alt="Logo Heliski Albania"              
          sizes={this.props.guideImage.sizes}
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
        <h1>{this.props.name}</h1>
        <h4>{this.props.title}</h4>
        <p>{this.props.text}</p>
      </div>
    );
  }
}


