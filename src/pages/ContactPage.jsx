import { useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import LabelSlideButton from '../components/LabelSlideButton'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection
          eyebrow="Our contact"
          title={
            <>
              Building relationships through every
              <br />
              conversation we share
            </>
          }
          lede=""
          ctaLink="#contact-form"
          ctaLabel="Send a message"
          showCta={false}
          align="left"
        />

        <section className="contact-page" id="contact-form" aria-label="Contact form">
          <div className="container contact-page__inner">
            <div className="contact-page__grid">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__field">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 50 000 0000"
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property goals"
                    required
                  />
                </div>

                <LabelSlideButton
                  label="Send message"
                  newTab={false}
                  buttonType="submit"
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
              </form>

              <aside className="contact-page__details">
                <div className="contact-page__detail">
                  <p className="contact-page__label">Phone</p>
                  <a href="tel:+971800235272">+971 800 235 272</a>
                </div>
                <div className="contact-page__detail">
                  <p className="contact-page__label">Email</p>
                  <a href="mailto:info@amaadarealty.com">info@amaadarealty.com</a>
                </div>
                <div className="contact-page__detail">
                  <p className="contact-page__label">Address</p>
                  <address>
                    AMAADA REALTY
                    <br />
                    Dubai, United Arab Emirates
                  </address>
                </div>
                <div className="contact-page__detail">
                  <p className="contact-page__label">Office hours</p>
                  <p>Monday – Friday, 9:00 AM – 6:00 PM</p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
