// ContactUs.js

import React from 'react';
import './contactus.css'; // Import the shared styles

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <h2 className="contact-us-title">Contact Us</h2>
      <p className="contact-us-description">
        For inquiries and assistance, please feel free to reach out to us using the contact information provided below.
      </p>
      <div className="contact-details">
        <p>Phone: +123 456 7890</p>
        <p>Email: contact@example.com</p>
      </div>
    </div>
  );
}

export default ContactUs;
