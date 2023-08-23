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
      <div className="video-container">
        <div className="youtube-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/N9QSL1PLUS4"
            title="Live Channel"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
        <div className="youtube-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EB0Y1ztWnic"
            title="Live Channel"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
