// Umra.js

import React from 'react';
import './Services.css'; // Import the shared styles

const Umra = () => {
  return (
    <div className="services-page">
    <div className="services-page">
  <h2 className="services-title">Umra</h2>
  <p className="umra-meal-info">Sabah kahvaltısı + akşam yemeği açık büfe</p>

  <table className="umra-table">
    <thead>
      <tr>
        <th>Yürülem Mesafesi</th>
        <th>4'lu Oda</th>
        <th>3'lu Oda</th>
        <th>2'li Oda</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>10 günlük 3 gece Medine</td>
        <td>$14250</td>
        <td>$1475</td>
        <td>$1500</td>
      </tr>
      <tr>
        <td>14 günlük 3 gece Medine</td>
        <td>$1625</td>
        <td>$1657</td>
        <td>$1725</td>
      </tr>
      <tr>
        <td>20 günlük 3 gece Medine</td>
        <td>$2000</td>
        <td>$2050</td>
        <td>$2100</td>
      </tr>
    </tbody>
  </table>
<div className='sentence-container'>
  <p className="umra-sentence mekke-sentence">Mekke Oteli: Süréyi 350 mt</p>
  <p className="umra-sentence medine-sentence">Medine Oteli: Merkeziye 300-400 mt</p>
  </div>

  <table className="umra-table">
    <thead>
      <tr>
        <th>Yürülem Mesafesi</th>
        <th>4'lu Oda</th>
        <th>3'lu Oda</th>
        <th>2'li Oda</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>10 günlük 3 gece Medine</td>
        <td>$14250</td>
        <td>$1475</td>
        <td>$1500</td>
      </tr>
      <tr>
        <td>14 günlük 3 gece Medine</td>
        <td>$1625</td>
        <td>$1657</td>
        <td>$1725</td>
      </tr>
      <tr>
        <td>20 günlük 3 gece Medine</td>
        <td>$2000</td>
        <td>$2050</td>
        <td>$2100</td>
      </tr>
      <tr>
        <td>28 günlük 3 gece Medine</td>
        <td>$1625</td>
        <td>$1657</td>
        <td>$1725</td>
      </tr>
    </tbody>
  </table>
  <div className="sentence-container">
  <p className="mekke-sentence">MEKKE OTELI: SERVISLI OTELLERI 2000mt</p>
  <p className="medine-sentence">Medine Oteli: Merkeziye 300-400mt</p>
</div>
</div>



                  <div className='div' style={{
        height: '40vh'}}></div>
    </div>
  );
}

export default Umra;
