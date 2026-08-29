import LabelSlideButton from './LabelSlideButton'

const QUICK_LINKS = [
  { label: 'Group', href: '/#group' },
  { label: 'What we do', href: '/#what-we-do' },
  { label: 'Our approach', href: '/#our-approach' },
  { label: 'Partners', href: '/#partners' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Contact', href: '/contact' },
]

const UTILITY_LINKS = [
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
]

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <a href="/" className="site-footer__logo" aria-label="AMAADA REALTY home">
            AMAADA REALTY
          </a>
          <p className="site-footer__tagline">
            Discover your dream home with ease. Buy, sell, or invest in
            properties through our trusted, discreet advisory experience across
            the UAE.
          </p>
          <LabelSlideButton
            label="Get in touch"
            link="/contact"
            newTab={false}
            padding="8px 14px"
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

        <div className="site-footer__column">
          <p className="site-footer__label">Contact</p>
          <a className="site-footer__value" href="tel:+971800235272">
            +971 800 235 272
          </a>
          <p className="site-footer__label site-footer__label--spaced">Address</p>
          <address className="site-footer__value site-footer__address">
            AMAADA REALTY
            <br />
            Dubai, United Arab Emirates
          </address>
          <p className="site-footer__label site-footer__label--spaced">Follow us</p>
          <div className="site-footer__socials" style={{ display: 'flex', gap: '0.85rem', marginTop: '0.4rem' }}>
            <a href="https://www.instagram.com/amada_realty?utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', opacity: 0.8 }} aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.youtube.com/@amadarealty-e7o" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', opacity: 0.8 }} aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://www.facebook.com/people/Amada-Realty-LLC/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', opacity: 0.8 }} aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div className="site-footer__column">
          <p className="site-footer__label">Quick links</p>
          <ul className="site-footer__links">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__column">
          <p className="site-footer__label">Utility pages</p>
          <ul className="site-footer__links">
            {UTILITY_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer__bar">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} AMAADA REALTY. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
