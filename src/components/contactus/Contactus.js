// ContactUs.js

import React from 'react';
import './contactus.css'; // Import the shared styles

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <h2 className="contact-us-title">Bize Ulaşın</h2>
      <h4 className="contact-us-description">
      Sorularınız ve yardım için, lütfen aşağıda verilen iletişim bilgilerini kullanarak bizimle iletişime geçmekten çekinmeyin.      </h4>
      <div className="contact-details">
        <p>Phone: +123 456 7890</p>
        <p>Email: contact@example.com</p>
      </div>
    </div>
  );
}

export default ContactUs;
