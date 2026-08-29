import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import TermsPage from './pages/TermsPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import PropertyDetailPage from './pages/PropertyDetailPage'
import WhatWeDoPage from './pages/WhatWeDoPage'
import AboutUsPage from './pages/AboutUsPage'
import OurApproachPage from './pages/OurApproachPage'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/group" element={<AboutUsPage />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
        <Route path="/services" element={<WhatWeDoPage />} />
        <Route path="/our-approach" element={<OurApproachPage />} />
        <Route path="/approach" element={<OurApproachPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/property" element={<PropertyDetailPage />} />
        <Route path="/property/:id" element={<PropertyDetailPage />} />
        <Route path="/product" element={<PropertyDetailPage />} />
        <Route path="/product/:id" element={<PropertyDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
