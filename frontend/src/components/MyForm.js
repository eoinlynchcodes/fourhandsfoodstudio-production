// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xnqogkrk"
        method="POST"
        className="contactForm"
      >
        {/* <!-- add your custom form HTML here --> */}
        <ul className="form-container">
          <li>
            <div>
              <h2 className="violet">Contact Us</h2>
            </div>
            <p>
              Feel free to get in touch with any questions, about orders, to
              give feedback or anything else.{" "}
            </p>
            <hr/>
          </li>
          <label>Name:</label>
          <input type="text" name="name" />
          <br />

          <label>Email:</label>
          <input type="email" name="email" />
          <br />

          <label>Phone Number:</label>
          <input type="text" name="number" />
          <br />

          <label>Message:</label>
          <textarea type="textarea" name="message" rows="8" />
          <br />

          {status === "SUCCESS" ? (
            <p>Thanks you your message. We will respond promptly</p>
          ) : (
            <input
              type="submit"
              className="button primary"
              value="Send Message"
            />
          )}
          {status === "ERROR" && <p> There was an error. You can reach us on 4handsf@gmail.com</p>}
        </ul>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
