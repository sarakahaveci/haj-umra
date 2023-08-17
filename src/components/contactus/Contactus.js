// ContactUs.js
import React from 'react';
import './contactus.css'; // Import the shared styles
import ContactForm from './ContactForm'; // Import the ContactForm component

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-form-container">
        <ContactForm />
      </div>
      <div className="contact-details">
        <h2 className="contact-us-title">Bize Ulaşın</h2>
        <h4 className="contact-us-description">
          Sorularınız ve yardım için, lütfen aşağıda verilen iletişim bilgilerini kullanarak bizimle iletişime geçmekten çekinmeyin.
        </h4>
        <p>📞 : 0532 772 51 80   ✉️ : info@alharamaintur.com</p>
        <p>📍 : Akşemseddin Mahallesi / Akdeniz Caddesi / No : 48/1 Nur apartmanı, FATİH / İSTANBUL</p>
      </div>
      <div className='div' style={{
        height: '53vh'}}></div>
    </div>
  );
}

export default ContactUs;
