import React from 'react';
import Containter from 'reactstrap';
import Img from "gatsby-image";

import Link from 'gatsby-link'

export default class Header extends React.Component {
  render() {
    return (
      <header className="d-flex">
        <div className="container-fluid text-center my-auto">
          <Img
            alt="Charging a line in Prokletje mountain range"
            sizes={this.props.headerImage.sizes}
            className=""
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: -1,
              width: "100%",
              height: "100%",
            }}
          />
          <h1 className="mb-1 text-header" style={{ }}>HELISKI ALBANIA</h1>
          <h3 className="mb-5 bg-light">
            <em>Ride first descents in unexplored Albanian alps</em>
          </h3>
          <Link to="/packages" className="btn btn-primary">See our packages</Link>
        </div>
      </header>
    );
  }
}
