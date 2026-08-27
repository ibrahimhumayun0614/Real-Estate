import { Link } from 'react-router-dom'
import LabelSlideButton from './LabelSlideButton'
import { NAV_ITEMS } from '../constants/nav'

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label="AMAADA REALTY home">
          AMAADA REALTY
        </Link>

        <nav className="nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

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
          style={{ justifySelf: 'end' }}
        />
      </div>
    </header>
  )
}

export default SiteHeader
