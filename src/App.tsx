import { useState, Suspense, lazy, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import Navigation from './components/layout/Navigation'
import Hero from './components/sections/Hero'
import Estate from './components/sections/Estate'
import Preloader from './components/ui/Preloader'

const Suites = lazy(() => import('./components/sections/Suites'))
const Experience = lazy(() => import('./components/sections/Experience'))
const Gallery = lazy(() => import('./components/sections/Gallery'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const Contact = lazy(() => import('./components/sections/Contact'))
const FAQ = lazy(() => import('./components/sections/FAQ'))
const Location = lazy(() => import('./components/sections/Location'))
const Footer = lazy(() => import('./components/layout/Footer'))
const AvailabilityStickyBar = lazy(() => import('./components/ui/AvailabilityStickyBar'))

export default function App() {
  const { t, i18n } = useTranslation()
  const [loading, setLoading] = useState(true)
  const handlePreloaderComplete = useCallback(() => setLoading(false), [])

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta name="keywords" content={t('seo.keywords')} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thesecretkarimunjawa.com/" />
        <meta property="og:title" content={t('seo.title')} />
        <meta property="og:description" content={t('seo.ogDescription')} />
        <meta property="og:image" content="/assets/hero-coastal.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thesecretkarimunjawa.com/" />
        <meta property="twitter:title" content={t('seo.title')} />
        <meta property="twitter:description" content={t('seo.ogDescription')} />
        <meta property="twitter:image" content="/assets/hero-coastal.png" />

        <link rel="alternate" hrefLang="id" href="https://thesecretkarimunjawa.com/?lng=id" />
        <link rel="alternate" hrefLang="en" href="https://thesecretkarimunjawa.com/?lng=en" />
        <link rel="alternate" hrefLang="es" href="https://thesecretkarimunjawa.com/?lng=es" />
        <link rel="alternate" hrefLang="fr" href="https://thesecretkarimunjawa.com/?lng=fr" />
        <link rel="alternate" hrefLang="x-default" href="https://thesecretkarimunjawa.com/?lng=id" />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "The Secret Karimunjawa",
          "url": "https://thesecretkarimunjawa.com",
          "telephone": "+628131011434",
          "image": "https://thesecretkarimunjawa.com/assets/hero-coastal.png",
          "description": t('seo.description'),
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. I.J. Kasimo",
            "addressLocality": "Karimunjawa",
            "addressRegion": "Jawa Tengah",
            "postalCode": "59455",
            "addressCountry": "ID"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -5.8672,
            "longitude": 110.4381
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "9.6",
            "bestRating": "10",
            "worstRating": "1",
            "ratingCount": "150",
            "reviewCount": "150"
          },
          "priceRange": "Rp 1.600.000 - Rp 2.000.000",
          "currenciesAccepted": "IDR",
          "checkinTime": "13:00",
          "checkoutTime": "10:00",
          "numberOfRooms": 3,
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Sea View", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Sunset View", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Private Veranda", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Daily Housekeeping", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Restaurant", "value": true }
          ],
          "sameAs": [
            "https://www.instagram.com/thesecretkarimunjawa/",
            "https://www.booking.com/hotel/id/the-secret-karimunjawa-kabupaten-jepara1.id.html"
          ]
        })}</script>
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
            <FAQ />
            <Location />
            <Footer />
            <AvailabilityStickyBar />
          </Suspense>
        </div>
      )}
    </>
  )
}
