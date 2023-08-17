import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div>
      <h2 className="services-heading">Our Services</h2>
      <Link to="/haj" className="service-link">
        <div className="service">
          <h3>Haj</h3>
          <p>We offer comprehensive Haj packages to make your pilgrimage a meaningful and memorable experience.</p>
        </div>
      </Link>
      <Link to="/umra" className="service-link">
        <div className="service">
          <h3>Umra</h3>
          <p>Experience the spiritual journey of Umra with our dedicated and well-organized Umra packages.</p>
        </div>
      </Link>
      <div className='div' style={{
        height: '23vh'}}></div>
    </div>
  );
}

export default Services;
