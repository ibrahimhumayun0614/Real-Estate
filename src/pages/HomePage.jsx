import { Link } from 'react-router-dom'
import LabelSlideButton from '../components/LabelSlideButton'
import ScrollCounter from '../components/ScrollCounter'
import LogoLoop from '../components/LogoLoop'
import SiteHeader from '../components/SiteHeader'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

const PARTNER_LOGOS = [
  {
    src: '/images/partners/Al-Habtoor-Group.png.png',
    alt: 'Al Habtoor Group',
    title: 'Al Habtoor Group',
  },
  {
    src: '/images/partners/Dubai-Properties-Logo.png.png',
    alt: 'Dubai Properties',
    title: 'Dubai Properties',
  },
  {
    src: '/images/partners/Imtiaz-Logo.png',
    alt: 'Imtiaz Developments',
    title: 'Imtiaz Developments',
  },
  {
    src: '/images/partners/Meraas1.png',
    alt: 'Meraas',
    title: 'Meraas',
  },
  {
    src: '/images/partners/NSHAMA2.png.png',
    alt: 'Nshama',
    title: 'Nshama',
  },
  {
    src: '/images/partners/One-Development.png.png',
    alt: 'One Development',
    title: 'One Development',
  },
  {
    src: '/images/partners/Properties-For-Sale-By-GFS-Development.png',
    alt: 'GFS Development',
    title: 'GFS Development',
  },
  {
    src: '/images/partners/Properties-For-Sale-By-Modon.png',
    alt: 'Modon Properties',
    title: 'Modon Properties',
  },
  {
    src: '/images/partners/Properties-For-Sale-by-RAK-Properties.png',
    alt: 'RAK Properties',
    title: 'RAK Properties',
  },
  {
    src: '/images/partners/REPORTAGE VILLAGE FINAL LOGO B-W abudhabi-01.png',
    alt: 'Reportage Properties',
    title: 'Reportage Properties',
  },
  {
    src: '/images/partners/Samana-logo-1.png',
    alt: 'Samana Developers',
    title: 'Samana Developers',
  },
  {
    src: '/images/partners/aldar-properties-logo-1.png.png',
    alt: 'Aldar Properties',
    title: 'Aldar Properties',
  },
  {
    src: '/images/partners/arada-developer-1.png.png',
    alt: 'Arada Developer',
    title: 'Arada Developer',
  },
  {
    src: '/images/partners/ellington.png.png',
    alt: 'Ellington Properties',
    title: 'Ellington Properties',
  },
  {
    src: '/images/partners/hh-logo-2.png',
    alt: 'HH Development',
    title: 'HH Development',
  },
  {
    src: '/images/partners/omniyat.png',
    alt: 'Omniyat',
    title: 'Omniyat',
  },
]

const FEATURED_DEVELOPMENTS = [
  { id: 1, image: '/images/AMADAREALTY_1.jpg', alt: 'Featured Development 1' },
  { id: 2, image: '/images/AMADAREALTY_2.jpeg', alt: 'Featured Development 2' },
  { id: 3, image: '/images/AMADAREALTY_3.jpg', alt: 'Featured Development 3' },
  { id: 4, image: '/images/AMADAREALTY_4.jpg', alt: 'Featured Development 4' },
  { id: 5, image: '/images/AMADAREALTY_5.jpg', alt: 'Featured Development 5' },
  { id: 6, image: '/images/AMADAREALTY_6.jpg', alt: 'Featured Development 6' },
]

const FEATURED_PROPERTIES = [
  {
    id: 'address-residences',
    badge: 'Buy',
    title: 'ADDRESS RESIDENCES',
    image: '/images/ADDRESS RESIDENCES_1.jpg',
    price: 'AED 11,995,000',
    address: 'Jumeirah Beach Resort, Dubai',
    beds: '3 Bedroom + Maid',
    sqft: '1,927 Sqft.',
    extra: '2 Parking spaces',
  },
  {
    id: 'reportage-village',
    badge: 'Buy',
    title: 'Reportage Village',
    image: '/images/Reportage Village_1.jpg',
    price: 'AED 4,600,000',
    address: 'Abu Dhabi, UAE',
    beds: '3 Bedrooms Townhouse',
    sqft: '4,100 Sqft.',
  },
  {
    id: 'numa-reserve-villas',
    badge: 'Buy',
    title: 'Numa Reserve Villas',
    image: '/images/Numa Reserve Villas_1.jpg',
    price: 'AED 12,000,000',
    address: 'Dubai, UAE',
    beds: '5, 6 & 7 Bedroom Villas',
    sqft: '6,000 to 13,000 Sqft.',
  },
  {
    id: 'talea-by-beyond',
    badge: 'Buy',
    title: 'Talea by Beyond',
    image: '/images/Talea by Beyond_1.jpg',
    price: 'AED 2,200,000 - 9,000,000',
    address: 'Dubai, UAE',
    beds: '1 to 4-Bedroom Penthouse',
    sqft: '756 - 4,462 Sqft.',
  },
  {
    id: 'nad-al-sheba-gardens',
    badge: 'Buy',
    title: 'Nad Al Sheba Gardens',
    image: '/images/Nad Al Sheba Gardens_1.jpg',
    price: 'AED 5,000,000',
    address: 'Nad Al Sheba, Dubai',
    beds: '3 BR Townhouses to 7 BR Villas',
    sqft: '3,292 - 8,706 Sqft.',
  },
]

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-5.33 7-11a7 7 0 1 0-14 0c0 5.67 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function BedIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 18V9a2 2 0 0 1 2-2h5a3 3 0 0 1 3 3v1h6a2 2 0 0 1 2 2v5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 18h18M7 7V5.5A1.5 1.5 0 0 1 8.5 4h2A1.5 1.5 0 0 1 12 5.5V7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function BathIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 13h16v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 13V7.5A2.5 2.5 0 0 1 8.5 5H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M4 19v1M20 19v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SqftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 10h16M10 4v16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function CarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11 2 11.5 2 12v4c0 .6.4 1 1 1h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 17H9M15 17h4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection ctaLink="/contact" />

        <section className="featured" id="what-we-do" aria-labelledby="featured-heading">
          <div className="container">
            <header className="featured__header">
              <p className="featured__eyebrow">Featured properties</p>
              <h2 id="featured-heading">
                <span className="featured__line">Featured properties offering style</span>
                <span className="featured__line">comfort and lasting value</span>
              </h2>
            </header>

            <div className="featured__grid">
              {FEATURED_PROPERTIES.map((property) => (
                <article key={property.id} className="property-card">
                  <Link to={`/property/${property.id}`} className="property-card__link" aria-label={`View ${property.title}`}>
                    <div className="property-card__media">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="property-card__image"
                        loading="lazy"
                      />
                      <span className="property-card__badge">{property.badge}</span>
                    </div>

                    <div className="property-card__top">
                      <h3>{property.title}</h3>
                      <p className="property-card__price">{property.price}</p>
                    </div>

                    <p className="property-card__address">
                      <PinIcon />
                      <span>{property.address}</span>
                    </p>

                    <ul className="property-card__meta">
                      {property.beds ? (
                        <li>
                          <BedIcon />
                          <span>{property.beds}</span>
                        </li>
                      ) : null}
                      {property.sqft ? (
                        <li>
                          <SqftIcon />
                          <span>{property.sqft}</span>
                        </li>
                      ) : null}
                      {property.extra ? (
                        <li>
                          <CarIcon />
                          <span>{property.extra}</span>
                        </li>
                      ) : null}
                    </ul>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about" id="group" aria-labelledby="about-heading">
          <div className="container about__inner">
            <div className="about__media">
              <img
                src="/images/AMADAREALTY_7.jpeg"
                alt="About AMAADA Realty"
                className="about__image"
                loading="lazy"
              />
            </div>

            <div className="about__content">
              <p className="about__eyebrow">About us</p>
              <h2 id="about-heading">
                Experience integrity and guidance you can rely on in real estate
              </h2>
              <p className="about__copy">
                AMAADA REALTY is a global private equity real estate
                company. At AMAADA REALTY your property journey begins
                with a conversation — one that’s focused on your aspirations.
                From premium residences to high-yield investments, we offer a
                tailored, discreet advisory experience built on trust, market
                intelligence and a deep commitment to excellence across the UAE.
                Bespoke Real Estate. Exceptional Results.
              </p>
              <LabelSlideButton
                label="Learn more about us"
                link="/contact"
                newTab={false}
                padding="9px 18px"
                gap={8}
                rounded={6}
                colors={{
                  fill: '#000000',
                  textColor: '#FFFFFF',
                  hoverFill: '#27272a',
                  hoverTextColor: '#FFFFFF',
                }}
                border={{
                  borderColor: '#000000',
                  borderStyle: 'solid',
                  borderWidth: 1,
                }}
                hoverBorderColor="#27272a"
                icon={{
                  side: 'right',
                  size: 11,
                  type: 'symbol',
                  angle: 315,
                  color: '#000000',
                  padding: 4,
                  rounded: 100,
                  background: '#FFFFFF',
                  hoverBackground: '#FFFFFF',
                  hoverColor: '#000000',
                  restSymbol: '↗',
                  hoverSymbol: '↗',
                }}
                style={{
                  letterSpacing: '0.07em',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginTop: '0.5rem',
                }}
              />
            </div>
          </div>
        </section>

        <section className="journey" id="our-approach" aria-labelledby="journey-heading">
          <div className="container journey__inner">
            <header className="journey__header">
              <p className="journey__eyebrow">Our real estate journey</p>
              <h2 id="journey-heading">
                <span className="journey__line">Delivering trusted guidance</span>
                <span className="journey__line">and measurable outcomes in</span>
                <span className="journey__line">every property journey</span>
              </h2>
            </header>

            <div className="journey__stats">
              <div className="journey__stat">
                <ScrollCounter value="98%" className="journey__value" />
                <p className="journey__label">Positive feedback</p>
              </div>
              <div className="journey__stat">
                <ScrollCounter value="15+" className="journey__value" />
                <p className="journey__label">Years of experience</p>
              </div>
              <div className="journey__stat">
                <ScrollCounter value="25K" className="journey__value" />
                <p className="journey__label">Happy clients</p>
              </div>
              <div className="journey__stat">
                <ScrollCounter value="100+" className="journey__value" />
                <p className="journey__label">Properties sold</p>
              </div>
            </div>
          </div>
        </section>

        <section className="developments" id="developments" aria-labelledby="developments-heading">
          <div className="container">
            <header className="developments__header">
              <p className="developments__eyebrow">Featured developments</p>
              <h2 id="developments-heading">
                <span className="developments__line">Discover the latest in</span>
                <span className="developments__line">Dubai real estate projects</span>
              </h2>
            </header>

            <div className="developments__grid">
              {FEATURED_DEVELOPMENTS.map((item) => (
                <article key={item.id} className="development-card">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="development-card__image"
                    loading="lazy"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="partners" id="partners" aria-labelledby="partners-heading">
          <div className="container partners__inner">
            <header className="partners__header">
              <h2 id="partners-heading">Our partners</h2>
              <p className="partners__copy">
                AMAADA REALTY proudly collaborates with leading developers
                to bring you exceptional, high-quality properties from trusted
                partners.
              </p>
            </header>

            <div className="partners__loop">
              <LogoLoop
                logos={PARTNER_LOGOS}
                speed={70}
                direction="left"
                logoHeight={58}
                gap={52}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Partner logos"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
