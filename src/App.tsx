import { useState, Suspense, lazy, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from './components/layout/Navigation'
import Hero from './components/sections/Hero'
import Estate from './components/sections/Estate'
import Preloader from './components/ui/Preloader'

const Suites = lazy(() => import('./components/sections/Suites'))
const Experience = lazy(() => import('./components/sections/Experience'))
const Gallery = lazy(() => import('./components/sections/Gallery'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Location = lazy(() => import('./components/sections/Location'))
const Footer = lazy(() => import('./components/layout/Footer'))
const AvailabilityStickyBar = lazy(() => import('./components/ui/AvailabilityStickyBar'))

export default function App() {
  const [loading, setLoading] = useState(true)
  const handlePreloaderComplete = useCallback(() => setLoading(false), [])

  return (
    <>
      <Helmet>
        <title>The Secret Karimunjawa — Exclusive Island Retreat</title>
        <meta name="description" content="Experience The Secret Karimunjawa, an exclusive island retreat on the shores of Karimunjawa. Beachfront villas, world-class diving, and heartfelt Indonesian hospitality. Rated 9.6 Istimewa." />
        <meta name="keywords" content="the secret karimunjawa, karimunjawa villa, island retreat, beachfront villa, karimunjawa hotel, jepara, diving karimunjawa" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thesecretkarimunjawa.com/" />
        <meta property="og:title" content="The Secret Karimunjawa — Exclusive Island Retreat" />
        <meta property="og:description" content="An exclusive island retreat where nature, hospitality, and tranquility converge on the pristine shores of Karimunjawa." />
        <meta property="og:image" content="/assets/hero-coastal.png" />

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
  )
}
