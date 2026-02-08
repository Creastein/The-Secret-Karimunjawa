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
        <title>Villa VB Bali - Ungasan Coastal Modernism</title>
        <meta name="description" content="Experience coastal modernism at Villa VB Bali. A luxury private sanctuary in Ungasan featuring sustainable design, ocean views, and bespoke hospitality." />
        <meta name="keywords" content="luxury villa bali, ungasan villa, villa vb, coastal modernism, private pool villa, bali architecture" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://villavb.com/" />
        <meta property="og:title" content="Villa VB Bali - Ungasan Coastal Modernism" />
        <meta property="og:description" content="Where raw concrete meets organic tropics. Discover a masterpiece of sustainable luxury living in the heart of Ungasan." />
        <meta property="og:image" content="https://picsum.photos/seed/luxuryvilla15/1200/630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://villavb.com/" />
        <meta property="twitter:title" content="Villa VB Bali - Ungasan Coastal Modernism" />
        <meta property="twitter:description" content="Where raw concrete meets organic tropics. Discover a masterpiece of sustainable luxury living in the heart of Ungasan." />
        <meta property="twitter:image" content="https://picsum.photos/seed/luxuryvilla15/1200/630" />
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
