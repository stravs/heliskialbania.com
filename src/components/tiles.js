import React from 'react';
import Containter from 'reactstrap';
import Img from "gatsby-image";

export default class Section extends React.Component {
  render() {
    return (
      <div className="row row-eq-height no-gutters">
        <div className={"col-lg-6 " + (this.props.addClass)}>
          <Img
            alt="Logo Heliski Albania"              
            sizes={this.props.tilesImage.sizes}
            className="square" 
            style={{
              
              left: 0,
              top: 0,
              minHeight: "10rem",
              width: "auto",
              height: "100%", 
              zIndex: 2,
              objectPosition: "center left"
            }}
          />
        </div>
        
        <div className="col-lg-6 pt-2 pb-2 px-lg-5 my-auto">
          {this.props.children}
        </div>
      </div>
    );
  }
}


