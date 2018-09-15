import React from 'react';
import Containter from 'reactstrap';
import Img from "gatsby-image";

export default class SectionSafety extends React.Component {
  render() {
    return (
      <section className="d-flex left">
        <Img
          alt="Logo Heliski Albania"              
          sizes={this.props.safetyImage.sizes}
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
            <div className="offset-lg-1 col-lg-3">
              <h3 className="card-title">Safety is our priority</h3>
              <p className="card-text">This is a small operation  running under strict protocols and safety standards. We are aware that any activity in the mountains involves risks, especially when heliskiing, covering lots of ground in short time. Therefore we will do our best and make safety our priority. <br></br> Combining knowledge from our team, with constant education we are creating the best possible experience for our clients.</p>
              <a href="/safety" className="btn btn-primary">See how we operate</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


