import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LabelSlideButton from './LabelSlideButton'
import { NAV_ITEMS } from '../constants/nav'

function SiteHeader({ forceSolid = false }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const hasBackground = forceSolid || isScrolled || isMobileMenuOpen

  return (
    <header className={`site-header ${hasBackground ? 'site-header--scrolled' : 'site-header--transparent'}`}>
      <div className="container site-header__inner">
        <Link
          to="/"
          className="brand"
          aria-label="AMAADA REALTY home"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          AMAADA REALTY
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right CTA */}
        <div className="site-header__cta-wrapper">
          <LabelSlideButton
            label="Contact us"
            link="/contact"
            newTab={false}
            padding="7px 12px"
            gap={8}
            rounded={8}
            colors={{
              fill: '#FFFFFF',
              textColor: '#000000',
              hoverFill: '#000000',
              hoverTextColor: '#FFFFFF',
            }}
            border={{
              borderColor: '#FFFFFF',
              borderStyle: 'solid',
              borderWidth: 1,
            }}
            hoverBorderColor="#FFFFFF"
          />
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'mobile-menu-toggle--active' : ''}`}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="mobile-menu-toggle__line" />
          <span className="mobile-menu-toggle__line" />
        </button>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      <div
        className={`mobile-menu-drawer ${isMobileMenuOpen ? 'mobile-menu-drawer--open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-menu-drawer__content">
          <nav className="mobile-menu__nav" aria-label="Mobile Primary">
            <ul className="mobile-menu__list">
              {NAV_ITEMS.map((item, idx) => (
                <li
                  key={item.href}
                  className="mobile-menu__item"
                  style={{ transitionDelay: `${idx * 40 + 60}ms` }}
                >
                  <Link
                    to={item.href}
                    className="mobile-menu__link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="mobile-menu__num">0{idx + 1}</span>
                    <span className="mobile-menu__label">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mobile-menu__footer">
              <div onClick={() => setIsMobileMenuOpen(false)}>
                <LabelSlideButton
                  label="Contact Advisory"
                  link="/contact"
                  newTab={false}
                  padding="10px 22px"
                  gap={10}
                  rounded={8}
                  colors={{
                    fill: '#FFFFFF',
                    textColor: '#000000',
                    hoverFill: '#000000',
                    hoverTextColor: '#FFFFFF',
                  }}
                  border={{
                    borderColor: '#FFFFFF',
                    borderStyle: 'solid',
                    borderWidth: 1,
                  }}
                  hoverBorderColor="#FFFFFF"
                />
              </div>
              <p className="mobile-menu__tagline">Discreet. Intelligent. Bespoke.</p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
