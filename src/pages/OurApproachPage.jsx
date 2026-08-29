import SiteHeader from '../components/SiteHeader'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import LabelSlideButton from '../components/LabelSlideButton'
import BorderGlow from '../components/BorderGlow'

const METHODOLOGY = [
  {
    number: '01',
    title: 'Curated Investment Solutions',
    description:
      'We provide exclusive off-market opportunities and sophisticated investment structures. Including client profiling, targeted strategies by sector or region. Every analysis is driven by market intelligence and shaped around your vision. Whether you seek prime residential asset, long term capital appreciation or diversification, each strategy is executed with discretion, accuracy and purpose.',
    highlight: 'Discretion, Accuracy & Purpose',
  },
  {
    number: '02',
    title: 'Secure & Seamless Transactions',
    description:
      'We uphold the highest standards of compliance and professionalism, operating under RERA regulations, to ensure every negotiation is ethical, secure and risk aware. Our team oversees each stage with legal diligence and total transparency so you can invest with confidence.',
    highlight: 'RERA Compliance & Total Transparency',
  },
  {
    number: '03',
    title: 'White-Glove Service',
    description:
      'At Amada, client service is not just a value it’s a craft. From our first conversation to post acquisition support, we provide an unparalleled level of care, communication and discretion. We listen deeply, advise wisely and act decisively ensuring your experience is as refined as the assets we help you acquire.',
    highlight: 'Unparalleled Discretion & Lifelong Care',
  },
]

const KEY_STONES = [
  { title: 'We Are Family', subtitle: 'Unbreakable trust and unity in every relationship.' },
  { title: 'Obsess Over Clients', subtitle: 'Every detail calibrated around client ambition.' },
  { title: 'Think Long Term', subtitle: 'Building generational wealth beyond transient trends.' },
  { title: 'We Are Supportive', subtitle: 'Guiding you with clarity through every complexity.' },
  { title: 'Be Professional', subtitle: 'Exemplary diligence, ethics, and market mastery.' },
  { title: 'Be Trustworthy', subtitle: 'Total confidentiality, compliance, and integrity.' },
  { title: 'Be Determined', subtitle: 'Relentless drive to secure the finest possible outcomes.' },
  { title: 'Be Approachable', subtitle: 'Open, transparent, and responsive communication.' },
]

function OurApproachPage() {
  return (
    <>
      <SiteHeader />
      <main className="approach-page">
        {/* Hero Section */}
        <HeroSection
          compact={true}
          eyebrow="THIS IS"
          title="OUR APPROACH"
          lede="DISCREET. INTELLIGENT. BESPOKE."
          showCta={false}
        />

        {/* Philosophy Intro */}
        <section className="approach-intro" aria-labelledby="approach-intro-heading">
          <div className="container approach-intro__container">
            <div className="approach-intro__eyebrow-col">
              <span className="approach-intro__tag">OUR ETHOS</span>
            </div>

            <div className="approach-intro__content">
              <h2 id="approach-intro-heading" className="approach-intro__title">
                True luxury lies in simplicity, trust, and precision.
              </h2>
              <div className="approach-intro__text">
                <p>
                  At Amada Realty, we believe true luxury lies in simplicity, trust, and precision. Our mission is clear: to deliver exceptional real estate outcomes by aligning the right opportunities with the right people at the perfect moment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Core Methodologies */}
        <section className="approach-methods" aria-labelledby="approach-methods-heading">
          <div className="container">
            <div className="approach-methods__header">
              <p className="approach-methods__eyebrow">ADVISORY ARCHITECTURE</p>
              <h2 id="approach-methods-heading" className="approach-methods__title">
                Meticulously designed for strategic precision and peace of mind.
              </h2>
            </div>

            <div className="approach-methods__list">
              {METHODOLOGY.map((method) => (
                <BorderGlow
                  key={method.number}
                  className="approach-method-card"
                  backgroundColor="#ffffff"
                  borderRadius={14}
                  edgeSensitivity={30}
                  glowColor="210 20 80"
                  glowRadius={32}
                  glowIntensity={0.8}
                  colors={['#000000', '#64748b', '#cbd5e1']}
                >
                  <div className="approach-method-card__top">
                    <span className="approach-method-card__num">{method.number}</span>
                    <span className="approach-method-card__badge">{method.highlight}</span>
                  </div>
                  <h3 className="approach-method-card__title">{method.title}</h3>
                  <p className="approach-method-card__desc">{method.description}</p>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>

        {/* Keystones of Amada */}
        <section className="approach-keystones" aria-labelledby="approach-keystones-heading">
          <div className="container">
            <div className="approach-keystones__header">
              <p className="approach-keystones__eyebrow">FOUNDATIONAL VALUES</p>
              <h2 id="approach-keystones-heading" className="approach-keystones__title">
                THE KEY STONES OF AMADA
              </h2>
              <p className="approach-keystones__subtitle">
                The non-negotiable principles that guide every interaction, negotiation, and acquisition.
              </p>
            </div>

            <div className="approach-keystones__grid">
              {KEY_STONES.map((keystone, idx) => (
                <BorderGlow
                  key={idx}
                  className="approach-keystone-card"
                  backgroundColor="#111111"
                  borderRadius={12}
                  edgeSensitivity={35}
                  glowColor="45 90 75"
                  glowRadius={28}
                  glowIntensity={1.1}
                  colors={['#e2d9c8', '#d4af37', '#ffffff']}
                >
                  <span className="approach-keystone-card__index">0{idx + 1}</span>
                  <h3 className="approach-keystone-card__title">{keystone.title}</h3>
                  <p className="approach-keystone-card__desc">{keystone.subtitle}</p>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Callout */}
        <section className="approach-cta-section">
          <div className="container">
            <div className="approach-cta-card">
              <div className="approach-cta-card__body">
                <span className="approach-cta-card__badge">START THE CONVERSATION</span>
                <h3 className="approach-cta-card__title">Experience our bespoke approach firsthand</h3>
                <p className="approach-cta-card__desc">
                  Schedule a private session with an Amada senior advisor to discuss your acquisition criteria, off-market opportunities, or portfolio strategy.
                </p>
              </div>
              <div className="approach-cta-card__action">
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

export default OurApproachPage
