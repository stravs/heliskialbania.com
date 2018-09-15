import React from 'react';
import Containter from 'reactstrap';


export default class Youtube extends React.Component {
  render() {
    return (
      <div className="col-lg-6">
        <iframe className="video" src={this.props.src} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    );
  }
}



