import React from 'react';
import Containter from 'reactstrap';
import Img from "gatsby-image";

export default class SectionPackages extends React.Component {
  render() {
    return (
      <section className="d-flex packages">
        <Img
          alt="Prokletje mountain range"              
          sizes={this.props.packagesImage.sizes}
          className=""
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            objectposition: "center right"
          }}
        />
        <div className="container my-auto">
          <div className="mx-auto text-center mt-5">
            <h1 className="">Packages</h1>
            
          </div>
          <div className="card-deck mb-3 text-center">
            <div className="card mb-4 box-shadow">
              <div className="card-header card-header-primary">
                <h4 className="my-0 font-weight-normal">One week</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li><strong>4+1</strong><br/><strong>small groups</strong> of 4 skiers and 1 guide</li>
                  <li><strong>3</strong><br/>groups max per helicopter</li>
                  <li><strong>4</strong><br/><strong>hours</strong> of flying time</li>
                  <li><strong>5</strong><br/>possible days of skiing</li>
                  
                </ul>
              </div>
            </div>
            <div className="card mb-4 box-shadow">
              <div className="card-header card-header-primary">
                <h4 className="my-0 font-weight-normal">Private</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li><strong>1500 square km</strong><br/>of mountains for yourself</li>
                  <li><strong>12</strong><br/>max people</li>
                  <li><strong>8 to 12</strong><br/>hours of flying time</li>
                  <li><strong>5</strong><br/>possible days of skiing</li>
                </ul>
              </div>
            </div>
          </div>
          <a href="/packages" className="btn btn-primary btn-block mb-5" style={{ zindex: 2 }}>See our packages</a>
        </div>
      </section>
    );
  }
}


