// App.js (or index.js)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/homepage/Home';
import Aboutus from './components/aboutus/Aboutus';
import Services from './components/services/Services';
import Contactus from './components/contactus/Contactus';
import TourDetails from './components/homepage/TourDetails';
import HajUmra from './components/homepage/HajUmra';
import HajUmraDetails from './components/homepage/HajUmraDetails';
import GallerySection from'./components/homepage/GallerySection';
import Footer from './components/footer/Footer';
import Kurumsal from './components/kurumsal/Kurumsal';
import Haj from './components/services/Haj';
import Umra from './components/services/Umra'
const App = () => {
  return (
   <>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path='/kurumsal' element={<Kurumsal/>}/>
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/tours/:tourId" element={<TourDetails/>} />
        <Route path="/hajumra" element={<HajUmra />} />
        <Route path="/hajumra/:packageId" element={<HajUmraDetails/>} />
        <Route path="/gallery/:photoId" element={<GallerySection />} />
        <Route path="/haj" element={<Haj/>} /> 
        <Route path="/umra" element={<Umra/>} />
      </Routes>
      <Footer />
      </>
  );
};

export default App;
