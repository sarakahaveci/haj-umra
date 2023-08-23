// AboutUs.js

import React from 'react';
import './Aboutus.css'; // Import the shared styles

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <h2 className="about-us-title">Hakkımızda</h2>
      <p className="about-us-description">
        Hacı ve umreci adaylarımızı birer müşteri olarak değil, Yüce Allah’ın misafiri olarak görüyoruz. Mekke-i Mükerreme ve Medine-i Münevvere’yi ziyaret edenlerin, Beytullah’ı tavaf edenlerin, Hücre-i Saadet’in karşısında Peygamber Efendimiz’in (s.a.v) huzuruna çıkanların, Arafat’ta tövbe edenlerin ve Müzdelife’de sevgiliye yalvaranların hizmetkarıyız.
      </p>
      <p>
        Hac ve Umre organizasyonu alanlarında en kaliteli hizmet veren sektörün lider acentaları arasındadır. Ayrıcalıklı ve kaliteli hizmet sunmayı ilke edinmiş, yüksek müşteri memnuniyeti oranlarını başarıyla yakalamış, işine her zaman saygı göstermiş ve tüm bunları bir standart haline getirmiştir.
      </p>
      <p>
        Al-Haramain Tur çalışanları; Firmamızda müşteriler için ve müşteriler sayesinde var olduğunu bilir. Müşterilerin, kendilerini değerli hissetmek istediğini bilir. Müşterileri tanımak, müşterilerin özelliklerini, ihtiyaç ve beklentilerini anlamak için çaba gösterir. Müşterileri ile uzun vadeli, her iki taraf açısından da adil ve kazandıran bir ilişki kurmayı hedefler.
      </p>
      <div className='div' style={{
        height: '29vh'}}></div>
    </div>
  );
}

export default AboutUs;
