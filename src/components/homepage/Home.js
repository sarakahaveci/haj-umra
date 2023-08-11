import React from "react";
import PhotoCarousel from "./PhotoCarousel";
import Tours from "./Tours";
import './Homepage.css'
import HajUmra from "./HajUmra";
import GalleryHomePage from "./GalleryHomePage";

const Home = () => {
  return (
    <div>
    <PhotoCarousel/>
  <Tours/>
  <div className="promo-text">
  <h3>SİZİN İÇİN EN İYİSİNİ DÜŞÜNÜYORUZ</h3>
  <p>
    En kaliteli hizmeti en uygun fiyatlara sunuyoruz. Memnuniyetinizin en üst seviyede olacağını garanti ediyoruz.
    Bu kutsal yolculuğunuzda Ammar Turizm olarak her konuda yardımcınız ve destekçiniz oluyoruz.
  </p>
</div>
<HajUmra/>
<GalleryHomePage/>
      </div>
  );
};

export default Home;
