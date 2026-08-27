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
  { label: 'Privacy policy', href: '#privacy' },
  { label: 'Terms of use', href: '#terms' },
  { label: 'Cookie policy', href: '#cookies' },
  { label: 'Careers', href: '#careers' },
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
