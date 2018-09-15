import React from 'react';
import Containter from 'reactstrap';
import Img from "gatsby-image";

export default class ImgGallery extends React.Component {
  render() {
    return (
      <div className="col-lg-4">
        <Img
          alt="Logo Heliski Albania"              
          sizes={this.props.terrainImage.sizes}
          className="square"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            objectposition: "center right"
          }}
        />  
      </div>
    );
  }
}

