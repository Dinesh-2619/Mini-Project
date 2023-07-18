import React from 'react';
import './ContactUsPage.css';
import { useState } from 'react';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  }; 
  return (
    <div className='hole'>
    <div className="contact-us-container">
      <h1 className='head'>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
 
          <input type="text1" id="name" value={name}
            onChange={(e) => setName(e.target.value)}
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email"          value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"  value={message}
            onChange={(e) => setMessage(e.target.value)}
            required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}


export default Contact;
