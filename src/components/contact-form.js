import React from 'react';
import Containter from 'reactstrap';
import Img from "gatsby-image";

export default class ContactForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
    })
  })

  render() {
    return (
      <div className="row row-eq-height no-gutters">

        <div className="offset-lg-2 col-lg-8 mt-4">
          <form name="contact" method="POST" netlify="true" dataNetlifyHoneypot="bot-field" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="emailAdress">Your email adress</label>
              <input type="email" className="form-control" id="exampleInputEmail1" ariaDescribedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="package">Package you are intrested in</label>
              <select className="form-control" id="package">
                <option>One week</option>
                <option>Private</option>
                <option>I have other questions</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="body">Your message</label>
              <textarea className="form-control" id="body" rows="6"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    );
  }
}


