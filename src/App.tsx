import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import AvailabilityStickyBar from './components/AvailabilityStickyBar';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      
      {!loading && (
        <div className="min-h-screen bg-bleached-sand font-sans overflow-x-hidden animate-fade-in">
          <Navigation />
          <Hero />
          <About />
          <Rooms />
          <Experience />
          <Gallery />
          <Testimonials />
          <Contact />
          <Location />
          <Footer />
          <AvailabilityStickyBar />
        </div>
      )}
    </>
  );
};

export default App;