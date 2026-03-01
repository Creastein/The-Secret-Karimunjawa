import React, { useState, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Estate from './components/Estate';
import Preloader from './components/Preloader';

// Lazy load components below the fold
const Suites = lazy(() => import('./components/Suites'));
const Experience = lazy(() => import('./components/Experience'));
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Location = lazy(() => import('./components/Location'));
const Footer = lazy(() => import('./components/Footer'));
const AvailabilityStickyBar = lazy(() => import('./components/AvailabilityStickyBar'));

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = React.useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Helmet>
        <title>The Secret Karimunjawa — Exclusive Island Retreat</title>
        <meta name="description" content="Experience The Secret Karimunjawa, an exclusive island retreat on the shores of Karimunjawa. Beachfront villas, world-class diving, and heartfelt Indonesian hospitality. Rated 9.6 Istimewa." />
        <meta name="keywords" content="the secret karimunjawa, karimunjawa villa, island retreat, beachfront villa, karimunjawa hotel, jepara, diving karimunjawa" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thesecretkarimunjawa.com/" />
        <meta property="og:title" content="The Secret Karimunjawa — Exclusive Island Retreat" />
        <meta property="og:description" content="An exclusive island retreat where nature, hospitality, and tranquility converge on the pristine shores of Karimunjawa." />
        <meta property="og:image" content="/assets/hero-coastal.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thesecretkarimunjawa.com/" />
        <meta property="twitter:title" content="The Secret Karimunjawa — Exclusive Island Retreat" />
        <meta property="twitter:description" content="An exclusive island retreat where nature, hospitality, and tranquility converge on the pristine shores of Karimunjawa." />
        <meta property="twitter:image" content="/assets/hero-coastal.png" />
      </Helmet>

      <Preloader onComplete={handlePreloaderComplete} />

      {!loading && (
        <div className="min-h-screen bg-sand font-sans overflow-x-hidden animate-fade-in">
          <Navigation />
          <Hero />
          <Estate />

          <Suspense fallback={<div className="h-screen w-full bg-bleached-sand" />}>
            <Suites />
            <Experience />
            <Gallery />
            <Testimonials />
            <Contact />
            <Location />
            <Footer />
            <AvailabilityStickyBar />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default App;
