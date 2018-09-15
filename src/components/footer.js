import React from 'react';
import Containter from 'reactstrap';
import Img from "gatsby-image";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="d-flex mt-4">
       {/* <Img
          alt="Logo Heliski Albania"              
          sizes={this.props.footerImage.sizes}
          className=""
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: -2
          }}
        />
        */}
      
       <div className="container text-center">
         <div className="row text-center">
           {/*<div className="offset-lg-1-5 col-lg-1 col-xs-1">
             <img src="https://via.placeholder.com/100x100" alt="" />  
           </div>
           <div className="offset-lg-1 col-lg-1 col-xs-1">
             <img src="https://via.placeholder.com/100x100" alt="" />  
           </div>
           <div className="offset-lg-1 col-lg-1 col-xs-1">
             <img src="https://via.placeholder.com/100x100" alt="" />  
           </div>
           <div className="offset-lg-1 col-lg-1 col-xs-1">
             <img src="https://via.placeholder.com/100x100" alt="" />  
           </div>
           <div className="offset-lg-1 col-lg-1 col-xs-1">
             <img src="https://via.placeholder.com/100x100" alt="" />  
           </div>*/}
         </div>
         <div className="navbar navbar-expand-lg justify-content-around mt-4 text-center">
           <ul className="navbar-nav">
             <li className="navbar-item">
               <a className="nav-link" href="/about-us">About us</a>
             </li>
             <li className="navbar-item">
               <a className="nav-link" href="/contact-us">Contact us</a>
             </li>
{/*             <li className="navbar-item">
               <a className="nav-link" href="/privicy">Privicy policy</a>
             </li>*/}
           </ul>
         </div>
         <br/>
         <p className="text-muted small mb-0 text-center">Heliski Albania 2018</p>
       </div>   
      </footer>
    );
  }
}


