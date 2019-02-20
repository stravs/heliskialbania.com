import React from 'react';
import Containter from 'reactstrap';
import Img from "gatsby-image";

export default class TitleImg extends React.Component {
  render() {
    return (
      <div className="row row-eq-height no-gutters">
        <div className="col-lg-12">
          <Img
            alt="Contact photo for Heliski Albania"              
            sizes={this.props.sectionImage.sizes}
            className="" 
            style={{
              
              left: 0,
              top: 0,
              minHeight: "20rem",
              width: "auto",
              height: "50vh", 
              zindex: -1,
              objectPosition: "center left"
            }}
          />
        </div>
        <div className="offset-lg-2 col-lg-8 mt-4">
          <h1>{this.props.title}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}


