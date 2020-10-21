import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../App.css';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  var form = document.forms["contact"];

  function handleSubmit(e) {
    e.preventDefault();
 
		var to = 'marlon.guandique@gmail.com';
		var uri = 'mailto:' + to;
		var body = '';

		// setting variables values
		var name = "marlon";
		var subject = "marlon";
		var phone = "408";
    var message = "marlon";
		body += message + "\r\n\r\n";
		body += "Name: " + name + "\r\n";
		body += "Phone Number: " + phone + "\r\n";

		uri += '?subject=' + encodeURIComponent(subject);
		uri += '&body=' + encodeURIComponent(body);

		window.open(uri,'_blank');
  }

  return (
    <section className="row bg-text">
     
      <div className="col s12 m6">
        <h2 className="center" id="contact" data-testid="h1tag">Send Email</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label className="white-text" htmlFor="name">Name:</label>
            <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div>
            <label className="white-text" htmlFor="email">Email address:</label>
            <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div>
            <label className="white-text" htmlFor="message">Message:</label>
            <textarea className="input" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button className="btn-small cyan" type="submit" data-testid="button">Submit</button>
        </form>
      </div>
       <div className="col s12 m6">
        <h6 className="center" htmlFor="email">email address: marlon.guandique@gmail.com</h6>
        <h6 className="center" htmlFor="email">phone number: 408-999-8877</h6>
      </div>
    </section>
  )
}

export default ContactForm;