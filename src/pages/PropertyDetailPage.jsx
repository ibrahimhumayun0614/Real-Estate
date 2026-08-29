import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import Footer from '../components/Footer'
import LabelSlideButton from '../components/LabelSlideButton'
import { PROPERTIES_DATA, DEFAULT_PROPERTY } from '../data/properties'

function BathIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12h16c0 4.418-3.582 8-8 8s-8-3.582-8-8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12V6a2 2 0 0 1 2-2h1.5A1.5 1.5 0 0 1 11 5.5V12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M5 20l-1 2M19 20l1 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function SqftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function BedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 19V8a2 2 0 0 1 2-2h6a3 3 0 0 1 3 3v2h7a2 2 0 0 1 2 2v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3 19h18M7 8V6a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 12 6v2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11 2 11.5 2 12v4c0 .6.4 1 1 1h2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 17H9M15 17h4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function QuoteIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10 11H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3v5a2 2 0 0 1-2 2h3v5a4 4 0 0 1-4 4H4"
        fill="#94a3b8"
        opacity="0.4"
      />
      <path
        d="M21 11h-4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3v5a2 2 0 0 1-2 2h3v5a4 4 0 0 1-4 4h-2"
        fill="#94a3b8"
        opacity="0.4"
      />
    </svg>
  )
}

const renderSpecIcon = (iconName) => {
  switch (iconName) {
    case 'car':
      return <CarIcon />
    case 'sqft':
      return <SqftIcon />
    case 'bed':
      return <BedIcon />
    case 'bath':
    default:
      return <BathIcon />
  }
}

function PropertyDetailPage() {
  const { id } = useParams()
  const property = useMemo(() => {
    if (id && PROPERTIES_DATA[id]) {
      return PROPERTIES_DATA[id]
    }
    return DEFAULT_PROPERTY
  }, [id])

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  return (
    <>
      <SiteHeader forceSolid={true} />
      <main className="product-page-main">
        {/* Top Breadcrumb Bar */}
        <div className="container product-breadcrumb-container">
          <nav className="product-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="product-breadcrumb__link">Home</Link>
            <span className="product-breadcrumb__sep">/</span>
            <a href="/#what-we-do" className="product-breadcrumb__link">Properties</a>
            <span className="product-breadcrumb__sep">/</span>
            <span className="product-breadcrumb__current">{property.title}</span>
          </nav>
        </div>

        <article className="container product-content-container">
          {/* Main Stage Gallery */}
          <section className="product-gallery" aria-label="Property gallery">
            <div className="product-gallery__stage">
              <img
                src={property.gallery[activeImageIndex] || property.gallery[0]}
                alt={`${property.title} showcase view`}
                className="product-gallery__stage-img"
              />
              <div className="product-gallery__stage-badge">
                <span className="product-gallery__price">{property.price}</span>
                <span className="product-gallery__loc">{property.location}</span>
              </div>
            </div>

            {/* 5-Thumbnail Navigation Strip */}
            <div className="product-gallery__strip" role="tablist" aria-label="Gallery thumbnails">
              {property.gallery.slice(0, 5).map((img, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={activeImageIndex === index}
                  aria-label={`View photo ${index + 1}`}
                  className={`product-gallery__thumb ${activeImageIndex === index ? 'product-gallery__thumb--active' : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={img} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </section>

          {/* Key Specs Bar (3-Column Bordered Strip) */}
          <section className="product-specs-bar" aria-label="Key specifications">
            {property.specs ? (
              property.specs.map((spec, idx) => (
                <div key={idx} className="product-specs-bar__item">
                  {renderSpecIcon(spec.icon)}
                  <span>{spec.label}</span>
                </div>
              ))
            ) : (
              <>
                <div className="product-specs-bar__item">
                  <BathIcon />
                  <span>{property.baths}</span>
                </div>
                <div className="product-specs-bar__item">
                  <SqftIcon />
                  <span>{property.sqft}</span>
                </div>
                <div className="product-specs-bar__item">
                  <BedIcon />
                  <span>{property.beds}</span>
                </div>
              </>
            )}
          </section>

          {/* Editorial Headline & Overview */}
          <section className="product-editorial" aria-labelledby="product-editorial-heading">
            <h1 id="product-editorial-heading" className="product-editorial__title">
              {property.tagline}
            </h1>
            <div className="product-editorial__body">
              {property.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* Property Features */}
          <section className="product-features" aria-labelledby="product-features-heading">
            <h2 id="product-features-heading" className="product-section-title">
              PROPERTY FEATURES
            </h2>
            <div className="product-features__grid">
              {property.features.map((feature, idx) => (
                <div key={idx} className="product-features__item">
                  <span className="product-features__bullet" aria-hidden="true" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* About The Owner / Developer */}
          <section className="product-about-owner" aria-labelledby="product-about-owner-heading">
            <h2 id="product-about-owner-heading" className="product-section-title">
              {property.aboutTitle || 'ABOUT THE OWNER'}
            </h2>
            <div className="product-about-owner__body">
              {property.aboutOwner.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </section>

          {/* Booking & Advisory CTA Bar */}
          <section className="product-inquiry-bar" aria-label="Book a private viewing">
            <div className="product-inquiry-bar__content">
              <p className="product-inquiry-bar__eyebrow">EXCLUSIVE PRIVATE VIEWING</p>
              <h3 className="product-inquiry-bar__title">Experience {property.title} in person</h3>
              <p className="product-inquiry-bar__desc">
                Connect with our senior private client advisors for private tours, investment dossiers, and tailored acquisition terms.
              </p>
            </div>
            <div className="product-inquiry-bar__cta">
              <LabelSlideButton
                label="Book a Private Viewing"
                link="/contact"
                newTab={false}
                padding="9px 18px"
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
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default PropertyDetailPage
