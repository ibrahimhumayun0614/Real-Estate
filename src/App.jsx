import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import TermsPage from './pages/TermsPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import PropertyDetailPage from './pages/PropertyDetailPage'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
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
