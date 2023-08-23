// ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'; // Import the form styling

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // New state for phone number
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Form data:', name, email, phone, message);
    // Replace with your own EmailJS service configuration
    const serviceID = 'service_ohcltqa';
    const templateID = 'template_9r3taa2';
    const userID = 'OMg8FOuK0MnVK0uwf';
    emailjs.init('OMg8FOuK0MnVK0uwf');


    try {
      await emailjs.send(serviceID, templateID, {
        from_name: name,
        reply_to: email,
        phone: phone,
        message: message,
      }, userID);

      console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }

    // Clear form fields
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
      type="tel" // Use "tel" input type for phone numbers
      placeholder="Your Phone Number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;