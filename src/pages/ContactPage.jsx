import { useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <>
      <SiteHeader />
      <main className="contact-main">
        <HeroSection
          eyebrow="Our contact"
          title={
            <>
              <span>Building relationships through</span>
              <span>every conversation we share</span>
            </>
          }
          lede=""
          ctaLink="#contact-form"
          ctaLabel="Send a message"
          showCta={false}
          align="left"
          compact={true}
        />

        <section className="contact-section" id="contact-form" aria-label="Contact form">
          <div className="container contact-section__grid">
            <div className="contact-card">
              <h2 className="contact-card__heading">SEND US A MESSAGE</h2>

              <form className="contact-card__form" onSubmit={handleSubmit}>
                <div className="contact-card__row">
                  <div className="contact-card__field">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name *"
                      required
                    />
                  </div>
                  <div className="contact-card__field">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name *"
                      required
                    />
                  </div>
                </div>

                <div className="contact-card__field">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    required
                  />
                </div>

                <div className="contact-card__field">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number *"
                    required
                  />
                </div>

                <div className="contact-card__field">
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                  />
                </div>

                <button type="submit" className="contact-card__submit">
                  <span>{submitted ? 'MESSAGE SENT' : 'SUBMIT NOW'}</span>
                  <ArrowRightIcon />
                </button>
              </form>

              <div className="contact-card__mail">
                <span className="contact-card__mail-label">MAIL</span>
                <a href="mailto:info@amaadarealty.com" className="contact-card__mail-address">
                  info@amaadarealty.com
                </a>
              </div>

              <div className="contact-card__socials">
                <a
                  href="https://www.instagram.com/amada_realty?utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card__social-btn"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                  <span>INSTAGRAM</span>
                </a>
                <a
                  href="https://www.youtube.com/@amadarealty-e7o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card__social-btn"
                  aria-label="YouTube"
                >
                  <YouTubeIcon />
                  <span>YOUTUBE</span>
                </a>
                <a
                  href="https://www.facebook.com/people/Amada-Realty-LLC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card__social-btn"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                  <span>FACEBOOK</span>
                </a>
              </div>
            </div>

            <div className="contact-media">
              <img
                src="/images/AMADAREALTY_8.jpg"
                alt="AMAADA Realty Luxury Residence"
                className="contact-media__image"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
