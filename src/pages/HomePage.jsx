import LabelSlideButton from '../components/LabelSlideButton'
import ScrollCounter from '../components/ScrollCounter'
import LogoLoop from '../components/LogoLoop'
import SiteHeader from '../components/SiteHeader'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

const PARTNER_LOGOS = Array.from({ length: 8 }, (_, index) => ({
  node: <div className="partner-logo-placeholder" aria-hidden="true" />,
  title: `Partner ${index + 1}`,
}))

const FEATURED_PROPERTIES = [
  {
    id: 'maple-grove',
    badge: 'Renovate',
    title: 'Maple Grove Residency',
    price: '$600,000',
    address: '2217 Cedar Grove Way, Denver, Co 80206',
    beds: 2,
    baths: 2,
    sqft: 2150,
  },
  {
    id: 'silverleaf',
    badge: 'Rent',
    title: 'Silverleaf Residency',
    price: '$800,000',
    address: '412 Bayview Terrace, Miami, Fl 33139',
    beds: 2,
    baths: 2,
    sqft: 2100,
  },
  {
    id: 'downtown-horizon',
    badge: 'Sell',
    title: 'Downtown Horizon Living',
    price: '$700,000',
    address: 'Skyline Tower, Downtown Dubai',
    beds: 2,
    baths: 2,
    sqft: 2200,
  },
  {
    id: 'palm-court',
    badge: 'Sell',
    title: 'Palm Court Residences',
    price: '$950,000',
    address: '18 Marina Walk, Dubai Marina',
    beds: 3,
    baths: 3,
    sqft: 2800,
  },
  {
    id: 'oak-ridge',
    badge: 'Rent',
    title: 'Oak Ridge Estate',
    price: '$520,000',
    address: '904 Highland Avenue, Austin, Tx 78704',
    beds: 2,
    baths: 2,
    sqft: 1900,
  },
  {
    id: 'crescent-bay',
    badge: 'Renovate',
    title: 'Crescent Bay Villas',
    price: '$1,150,000',
    address: '7 Palm Jumeirah Crescent, Dubai',
    beds: 4,
    baths: 4,
    sqft: 3400,
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
                  <div className="property-card__media">
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
                    <li>
                      <BedIcon />
                      <span>{property.beds} Beds</span>
                    </li>
                    <li>
                      <BathIcon />
                      <span>{property.baths} Baths</span>
                    </li>
                    <li>
                      <SqftIcon />
                      <span>{property.sqft} Sqft</span>
                    </li>
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about" id="group" aria-labelledby="about-heading">
          <div className="container about__inner">
            <div className="about__media" aria-hidden="true" />

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
                link="/#group"
                newTab={false}
                padding="8px 14px"
                gap={10}
                rounded={8}
                colors={{
                  fill: '#000000',
                  textColor: '#FFFFFF',
                  hoverFill: '#FFFFFF',
                  hoverTextColor: '#000000',
                }}
                border={{
                  borderColor: '#000000',
                  borderStyle: 'solid',
                  borderWidth: 1,
                }}
                hoverBorderColor="#000000"
                icon={{
                  side: 'right',
                  size: 12,
                  type: 'symbol',
                  angle: 0,
                  color: '#000000',
                  padding: 6,
                  rounded: 100,
                  background: '#FFFFFF',
                  hoverColor: '#FFFFFF',
                  restSymbol: '→',
                  hoverSymbol: '→',
                  hoverBackground: '#000000',
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
              {[
                'Emirates Garden Villas',
                'Desert Rose Villas',
                'Golden Sands Residences',
                'Coastal Haven Dubai',
                'Falcon Crest Community',
                'Oasis Park Villas',
              ].map((name) => (
                <article key={name} className="development-card">
                  <div className="development-card__media" aria-hidden="true" />
                  <h3 className="development-card__title">{name}</h3>
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
                speed={80}
                direction="left"
                logoHeight={48}
                gap={48}
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
