import SiteHeader from '../components/SiteHeader'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import LabelSlideButton from '../components/LabelSlideButton'
import ScrollCounter from '../components/ScrollCounter'
import BorderGlow from '../components/BorderGlow'

const METRICS = [
  {
    target: 3,
    suffix: '+',
    label: 'GLOBAL OFFICES',
    description: 'International presence connecting global capital with UAE luxury real estate.',
  },
  {
    isText: true,
    value: '< 90',
    suffix: 'DAYS',
    label: 'SELL YOUR HOME',
    description: 'Fast, discreet, and data-driven marketing ensuring optimal valuation exits.',
  },
  {
    target: 25,
    suffix: '+',
    label: 'YEARS BUSINESS EXPERIENCES',
    description: 'Quarter-century of trusted wealth advisory and market leadership.',
  },
]

const PILLARS = [
  {
    number: '01',
    title: 'Global Advisory & Intelligence',
    description:
      'We combine deep local market expertise with global reach and innovative thinking. Our clients benefit from the shared intelligence of our international team including in-house creative, tech, and data strategy divisions.',
  },
  {
    number: '02',
    title: 'Curated Off-Market Access',
    description:
      'From prime off-plan allocations to discreet secondary market acquisitions, we provide exclusive access to curated high-value residential and commercial opportunities before they reach public listings.',
  },
  {
    number: '03',
    title: 'Generational Wealth Legacies',
    description:
      'Whether you are diversifying your portfolio, securing passive income, or building a multi-generational legacy, we design structured investment plans engineered for measurable, long-term capital appreciation.',
  },
]

function AboutUsPage() {
  return (
    <>
      <SiteHeader />
      <main className="about-us-page">
        {/* Hero Section */}
        <HeroSection
          compact={true}
          eyebrow="ABOUT US"
          title="WHERE INSIGHT MEETS OPPORTUNITY"
          lede="At Amada Realty, we don’t sell property — we build generational wealth legacies."
          showCta={false}
        />

        {/* Story & Editorial Narrative */}
        <section className="about-story" aria-labelledby="about-story-heading">
          <div className="container about-story__container">
            <div className="about-story__eyebrow-col">
              <span className="about-story__tag">OUR IDENTITY</span>
            </div>

            <div className="about-story__content">
              <h2 id="about-story-heading" className="about-story__title">
                More than a boutique brokerage — a global investment advisory.
              </h2>

              <div className="about-story__text">
                <p>
                  At Amada Realty, we’re more than a boutique real estate brokerage we’re a global, privately held investment advisory, specialising in high value residential and income generating properties across the UAE and beyond. Our mission is to deliver intelligent, tailored investment strategies through a full spectrum of real estate services from off-plan opportunities and secondary market acquisitions to portfolio development and exit planning.
                </p>

                <p>
                  What sets us apart? We combine deep market expertise with global reach and innovative thinking. Our clients benefit from exclusive access to curated deals, structured investment vehicles and the shared intelligence of our international team including in house creative, tech and data strategy divisions. Whether you&apos;re diversifying your portfolio, securing passive income, or building generational wealth, we work with you to create a plan that delivers real, measurable results.
                </p>

                <blockquote className="about-story__quote">
                  “At Amada Realty, we don’t sell property — we build generational wealth legacies.”
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics / Stats Strip */}
        <section className="about-metrics" aria-label="Company metrics">
          <div className="container">
            <div className="about-metrics__grid">
              {METRICS.map((metric, idx) => (
                <BorderGlow
                  key={idx}
                  className="about-metric-card"
                  backgroundColor="#111111"
                  borderRadius={14}
                  edgeSensitivity={35}
                  glowColor="45 90 75"
                  glowRadius={36}
                  glowIntensity={1.2}
                  colors={['#e2d9c8', '#c5a880', '#ffffff']}
                >
                  <div className="about-metric-card__value">
                    {metric.isText ? (
                      <span>{metric.value} <small>{metric.suffix}</small></span>
                    ) : (
                      <ScrollCounter target={metric.target} suffix={metric.suffix} />
                    )}
                  </div>
                  <h3 className="about-metric-card__label">{metric.label}</h3>
                  <p className="about-metric-card__desc">{metric.description}</p>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>

        {/* Core Pillars Section */}
        <section className="about-pillars" aria-labelledby="about-pillars-heading">
          <div className="container">
            <div className="about-pillars__header">
              <p className="about-pillars__eyebrow">STRATEGIC ADVANTAGE</p>
              <h2 id="about-pillars-heading" className="about-pillars__title">
                The principles that drive measurable client success.
              </h2>
            </div>

            <div className="about-pillars__grid">
              {PILLARS.map((pillar) => (
                <BorderGlow
                  key={pillar.number}
                  className="about-pillar-card"
                  backgroundColor="#ffffff"
                  borderRadius={14}
                  edgeSensitivity={30}
                  glowColor="210 20 80"
                  glowRadius={30}
                  glowIntensity={0.8}
                  colors={['#000000', '#64748b', '#cbd5e1']}
                >
                  <span className="about-pillar-card__num">{pillar.number}</span>
                  <h3 className="about-pillar-card__title">{pillar.title}</h3>
                  <p className="about-pillar-card__desc">{pillar.description}</p>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Callout */}
        <section className="about-cta-section">
          <div className="container">
            <div className="about-cta-card">
              <div className="about-cta-card__body">
                <span className="about-cta-card__badge">PARTNER WITH US</span>
                <h3 className="about-cta-card__title">Build your real estate wealth legacy today</h3>
                <p className="about-cta-card__desc">
                  Connect with our senior private client advisors in Dubai for discreet advisory, portfolio structuring, and private market allocations.
                </p>
              </div>
              <div className="about-cta-card__action">
                <LabelSlideButton
                  label="Contact Advisory"
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default AboutUsPage
