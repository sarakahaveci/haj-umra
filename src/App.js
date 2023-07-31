// App.js (or index.js)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/homepage/Home';
import Aboutus from './components/aboutus/Aboutus';
import Services from './components/services/Services';
import Contactus from './components/contactus/Contactus';

const App = () => {
  return (
   <>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contactus" element={<Contactus/>} />
      </Routes>
      </>
  );
};

export default App;
