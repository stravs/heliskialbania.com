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
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div className="row row-eq-height no-gutters">

        <div className="offset-lg-2 col-lg-8 mt-4">
          <form name="contact" action="https://formspree.io/info@heliskialbania.com"
      method="POST">
            <div className="form-group">
              <label htmlFor="emailAdress">Your email adress</label>
              <input type="email" className="form-control" id="exampleInputEmail1" ariaDescribedby="emailHelp" placeholder="Enter email" name="email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="package">Package you are intrested in</label>
              <select name="package" className="form-control" id="package">
                <option>One week</option>
                <option>Private</option>
                <option>I have other questions</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="body">Your message</label>
              <textarea name="body" className="form-control" id="body" rows="6"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    );
  }
}


