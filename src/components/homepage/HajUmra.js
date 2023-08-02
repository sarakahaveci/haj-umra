// HajUmra.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HajUmra.css'

const HajUmra = () => {
  const hajUmraData = [
    {
      id: 'package1',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Haj Tours',
    },
    {
      id: 'package2',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Umra Tours',
    },
    {
      id: 'package3',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Culture Tours',
    },
 ];

  return (
    <div className="haj-umra-section">
      <h2>Haj & Umra Packages</h2>
      <div className="haj-umra-grid">
        {hajUmraData.map((item) => (
          <Link key={item.id} to={`/hajumra/${item.id}`} className="haj-umra-link">
            <div className="haj-umra-column">
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HajUmra;
