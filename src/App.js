import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Translate from './component/Translator';
import Home from './component/Home'
import Footer from './component/Footer';
import About from './component/About';
import Tracking from './component/Tracking'
import ContactUs from './component/ContactUs';
import SpeciesGallery from './component/SpeciesGallery';
import News from './component/News'
import Chatbot from './component/Chatbot'
import HumanDetector from './component/HumanDetector';
import XMLDisplay from './component/Calculator';





const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/about" element={<About />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<SpeciesGallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/human" element={<HumanDetector />} />
        <Route path="/calculator" element={<XMLDisplay />} />






        
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;