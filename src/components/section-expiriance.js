import React from 'react';
import Containter from 'reactstrap';
import Img from "gatsby-image";

export default class SectionExpiriance extends React.Component {
  render() {
    return (
      <section className="d-flex right">
        <Img
          alt="Logo Heliski Albania"              
          sizes={this.props.expirianceImage.sizes}
          className=""
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zindex: -1,
            objectposition: "center right"
          }}
        />
        <div className="container-fluid my-auto">
          <div className="row">
            <div className="offset-lg-8 col-lg-3 text-right">
              <h4 className="card-title">Untouched and unskied terrain</h4>
              <p className="card-text">Our terrain  spreads over 1500 square kilometers, with 9 different zones. The Prokletije area is a subrange of the 1,000 km long Dinaric Alps. The Prokletije are a typical high mountain range with a pronounced steep topography and glacial features. Maximum relief differences of 1800 meters are found in the Valbona- our base, Grbaja and Ropojani and Cijevna Valley. </p>
              <a href="/location" className="btn btn-primary">Read more</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


