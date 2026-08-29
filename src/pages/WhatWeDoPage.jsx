import { useState, useRef, useEffect } from 'react'
import SiteHeader from '../components/SiteHeader'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import LabelSlideButton from '../components/LabelSlideButton'
import BorderGlow from '../components/BorderGlow'

const SERVICES = [
  {
    number: '01',
    title: 'Acquisition',
    subtitle: 'Exclusive Access & Conflict-Free Representation',
    description:
      'If you want to deal with one person without any conflicts of interest, while maintaining complete anonymity - retain us. We’ll give you total market coverage and access to opportunities before anyone else, including off market properties. Your expert advisor will negotiate the best price on your behalf, ensure you make the right decisions, and remove unnecessary stress and anxiety. Whatever you’re looking for, wherever it may be, we will find it.',
    tags: ['Total Market Coverage', 'Off-Market Access', 'Complete Anonymity', 'Price Negotiation'],
  },
  {
    number: '02',
    title: 'Legal Advisory & Analysis',
    subtitle: 'Due Diligence, Valuation & Commercial Structuring',
    description:
      'Amada has partnered with key industry professionals to provide a varying scope of legal and commercial services from contract negotiation and execution through the escrow process management to final ownership completion. Our highly experienced team excel in due diligence research & market analysis, valuation & acquisition.',
    tags: ['Contract Execution', 'Escrow Management', 'Due Diligence Research', 'Valuation Analysis'],
  },
  {
    number: '03',
    title: 'Negotiation',
    subtitle: 'Strategic Deal Structuring & Bilateral Alignment',
    description:
      'If you’ve found the perfect property, enlist us to deal with negotiating the complexities and nuances to securing the sale, so you don’t have to. During the preplanning phase, we must outline and clarify your personal objectives and devise a negotiation strategy. You’ll be supported by our exceptional market knowledge, a track record of record-breaking sales, and extensive data research. The result is a bilateral agreement where both parties are convinced of the benefits of the deal. And this is always our goal.',
    tags: ['Strategic Preplanning', 'Nuanced Deal Structuring', 'Record Sales History', 'Bilateral Win-Win'],
  },
  {
    number: '04',
    title: 'Design & Build',
    subtitle: 'Architectural Vision, Fit-Out & Turnkey Development',
    description:
      'Our Design Team formulates a personalised design vision for you. We open the doors to create new unique living spaces that enhance and promote the needs & wants of a modern lifestyle while, at the same time, servicing the market demand for upgrading homes. From architectural and interior design to fit-out, construction and staging houses, we take your through the whole process in order to create an exquisite home to live in or use as an investment opportunity.',
    tags: ['Architectural Design', 'Interior Fit-Out', 'Turnkey Construction', 'Home Staging'],
  },
  {
    number: '05',
    title: 'Marketing & Operations',
    subtitle: 'Targeted Demographics, Cinematography & Global Campaigning',
    description:
      'By determining the target audience & buyer demographic we create a property identity, specific branding & market positioning. By then utilising this brand through photography, videography services & digital creative design, we are able to obtain customer engagement.',
    tags: ['Buyer Demographics', 'Brand Positioning', 'Cinematography & Photo', 'Digital Engagement'],
  },
]

function WhatWeDoPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef(null)
  const autoPlayRef = useRef(null)

  const scrollToSlide = (index) => {
    if (!carouselRef.current) return
    const container = carouselRef.current
    const targetCard = container.children[index]
    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      })
    }
    setActiveIndex(index)
  }

  const handlePrev = () => {
    const nextIndex = activeIndex > 0 ? activeIndex - 1 : SERVICES.length - 1
    scrollToSlide(nextIndex)
  }

  const handleNext = () => {
    const nextIndex = activeIndex < SERVICES.length - 1 ? activeIndex + 1 : 0
    scrollToSlide(nextIndex)
  }

  // Auto-scroll loop
  useEffect(() => {
    if (isPaused) return

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % SERVICES.length
        if (carouselRef.current) {
          const targetCard = carouselRef.current.children[nextIndex]
          if (targetCard) {
            targetCard.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'start',
            })
          }
        }
        return nextIndex
      })
    }, 4500)

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isPaused])

  // Track manual drag/swipe scrolling
  useEffect(() => {
    const container = carouselRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const cardWidth = container.offsetWidth
      const newIndex = Math.round(scrollLeft / cardWidth)
      if (newIndex >= 0 && newIndex < SERVICES.length && newIndex !== activeIndex) {
        setActiveIndex(newIndex)
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [activeIndex])

  return (
    <>
      <SiteHeader />
      <main className="what-we-do-page">
        {/* Hero Section */}
        <HeroSection
          compact={true}
          eyebrow="THIS IS"
          title="WHAT WE DO"
          lede="BUYING & SELLING – THE AMADA WAY"
          showCta={false}
        />

        {/* Philosophy & Narrative Overview */}
        <section className="services-intro" aria-labelledby="services-intro-heading">
          <div className="container services-intro__container">
            <div className="services-intro__eyebrow-wrapper">
              <span className="services-intro__tag">OUR ADVISORY STANDARD</span>
            </div>

            <div className="services-intro__content">
              <h2 id="services-intro-heading" className="services-intro__title">
                Strategic, personalised, and results-driven real estate advisory.
              </h2>
              <div className="services-intro__text">
                <p>
                  Buying a home or investing in one is personal. It’s also one of the most significant decisions you’ll ever make. At Amada Realty, we make the process seamless, efficient, and tailored entirely to you.
                </p>
                <p>
                  Whether you&apos;re exploring off-plan, the secondary market, or rental investments, our proprietary database helps us pinpoint the perfect match from day one. We guide you through every stage from shortlisting to legal oversight with full transparency and custom reporting so you always know what’s happening.
                </p>
                <p className="services-intro__highlight">
                  We don’t do generic. We do strategic, personalised, and results-driven real estate advisory. No one does it quite like Amada. Experience the difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Single Carousel Showcase */}
        <section className="services-carousel-section" aria-labelledby="services-carousel-heading">
          <div className="container">
            <div className="services-carousel-section__top">
              <div className="services-carousel-section__header">
                <p className="services-carousel-section__eyebrow">CORE CAPABILITIES</p>
                <h2 id="services-carousel-heading" className="services-carousel-section__title">
                  Comprehensive advisory across the full lifecycle of luxury property.
                </h2>
              </div>

              {/* Navigation Controls */}
              <div className="services-carousel__controls" aria-label="Carousel navigation">
                <span className="services-carousel__counter">
                  <strong>{SERVICES[activeIndex].number}</strong> / 0{SERVICES.length}
                </span>
                <button
                  type="button"
                  className="services-carousel__btn"
                  onClick={handlePrev}
                  aria-label="Previous capability"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="services-carousel__btn"
                  onClick={handleNext}
                  aria-label="Next capability"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable Track Container */}
            <div
              className="services-carousel__track"
              ref={carouselRef}
              tabIndex={0}
              role="region"
              aria-label="Capabilities carousel"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              {SERVICES.map((service, idx) => (
                <div
                  key={service.number}
                  className={`services-carousel__slide ${activeIndex === idx ? 'services-carousel__slide--active' : ''}`}
                >
                  <article className="service-single-card">
                    <div className="service-single-card__header">
                      <span className="service-single-card__num">{service.number}</span>
                      <div className="service-single-card__headings">
                        <h3 className="service-single-card__title">{service.title}</h3>
                        <p className="service-single-card__subtitle">{service.subtitle}</p>
                      </div>
                    </div>

                    <div className="service-single-card__body">
                      <p className="service-single-card__desc">{service.description}</p>
                    </div>

                    <div className="service-single-card__footer">
                      <div className="service-single-card__tags">
                        {service.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="service-single-card__tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {/* Progress Dots / Bars */}
            <div className="services-carousel__dots" role="tablist" aria-label="Carousel slide select">
              {SERVICES.map((service, idx) => (
                <button
                  key={service.number}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === idx}
                  className={`services-carousel__dot ${activeIndex === idx ? 'services-carousel__dot--active' : ''}`}
                  onClick={() => scrollToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${service.title}`}
                >
                  <span className="services-carousel__dot-num">{service.number}</span>
                  <span className="services-carousel__dot-label">{service.title}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Callout */}
        <section className="services-cta-section">
          <div className="container">
            <BorderGlow
              className="services-cta-card"
              backgroundColor="#000000"
              borderRadius={16}
              edgeSensitivity={30}
              glowColor="45 80 80"
              glowRadius={40}
              glowIntensity={1.0}
              colors={['#e2d9c8', '#ffffff', '#94a3b8']}
            >
              <div className="services-cta-card__body">
                <span className="services-cta-card__badge">BESPOKE ENGAGEMENT</span>
                <h3 className="services-cta-card__title">Ready to experience the Amada difference?</h3>
                <p className="services-cta-card__desc">
                  Schedule a private consultation with our senior advisory team to discuss acquisitions, off-market opportunities, or portfolio structuring.
                </p>
              </div>
              <div className="services-cta-card__action">
                <LabelSlideButton
                  label="Book a Consultation"
                  link="/contact"
                  newTab={false}
                  padding="10px 20px"
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
            </BorderGlow>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default WhatWeDoPage
