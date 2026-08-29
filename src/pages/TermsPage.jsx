import { useState, useEffect } from 'react'
import SiteHeader from '../components/SiteHeader'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import LabelSlideButton from '../components/LabelSlideButton'

const SECTIONS = [
  {
    id: 'interpretation-definitions',
    number: '01',
    title: 'Interpretation and Definitions',
    content: (
      <>
        <h3 className="terms-subheading">Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the following conditions. 
          The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>

        <h3 className="terms-subheading" style={{ marginTop: '1.5rem' }}>Definitions</h3>
        <p>For the purposes of these Terms and Conditions:</p>
        <ul className="legal-list">
          <li>
            <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, 
            where &ldquo;control&rdquo; means ownership of 50% or more of the shares, equity interest or other securities entitled 
            to vote for election of directors or other managing authority.
          </li>
          <li>
            <strong>Country</strong> refers to: Virginia, United States
          </li>
          <li>
            <strong>Company</strong> (referred to as either &ldquo;the Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo; in this Agreement) 
            refers to <strong>Amada Realty LLC.</strong>, Iris Bay, Misa Business Center, Business Bay, Dubai, UAE.
          </li>
          <li>
            <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
          </li>
          <li>
            <strong>Service</strong> refers to the Website.
          </li>
          <li>
            <strong>Terms and Conditions</strong> (also referred as &ldquo;Terms&rdquo;) mean these Terms and Conditions that form the entire agreement 
            between You and the Company regarding the use of the Service.
          </li>
          <li>
            <strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) 
            provided by a third-party that may be displayed, included or made available by the Service.
          </li>
          <li>
            <strong>Website</strong> refers to Amada Realty LLC, accessible from{' '}
            <a href="https://amadarealty.com/" target="_blank" rel="noopener noreferrer" className="legal-inline-link">
              https://amadarealty.com/
            </a>
          </li>
          <li>
            <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which 
            such individual is accessing or using the Service, as applicable.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'acknowledgment',
    number: '02',
    title: 'Acknowledgment',
    content: (
      <>
        <p>
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. 
          These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
        </p>
        <p>
          Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. 
          These Terms and Conditions apply to all visitors, users and others who access or use the Service.
        </p>
        <p>
          By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these 
          Terms and Conditions then You may not access the Service.
        </p>
        <div className="legal-callout">
          <p className="legal-callout__title">Age Requirement</p>
          <p>
            You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
          </p>
        </div>
        <p>
          Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. 
          Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use 
          the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully 
          before using Our Service.
        </p>
      </>
    ),
  },
  {
    id: 'links-to-other-websites',
    number: '03',
    title: 'Links to Other Websites',
    content: (
      <>
        <p>
          Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.
        </p>
        <p>
          The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party websites or services. 
          You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged 
          to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.
        </p>
        <p>
          We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.
        </p>
      </>
    ),
  },
  {
    id: 'termination',
    number: '04',
    title: 'Termination',
    content: (
      <>
        <p>
          We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
        </p>
        <p>
          Upon termination, Your right to use the Service will cease immediately.
        </p>
      </>
    ),
  },
  {
    id: 'limitation-of-liability',
    number: '05',
    title: 'Limitation of Liability',
    content: (
      <>
        <p>
          Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven’t purchased anything through the Service.
        </p>
        <p>
          To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
        </p>
        <p>
          Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party’s liability will be limited to the greatest extent permitted by law.
        </p>
      </>
    ),
  },
  {
    id: 'as-is-disclaimer',
    number: '06',
    title: '“AS IS” and “AS AVAILABLE” Disclaimer',
    content: (
      <>
        <p>
          The Service is provided to You &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; and with all faults and defects without warranty of any kind. 
          To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors 
          and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied 
          warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course 
          of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation 
          of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems 
          or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
        </p>
        <p>
          Without limiting the foregoing, neither the Company nor any of the company’s provider makes any representation or warranty of any kind, express or implied: 
          (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be 
          uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the 
          Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs 
          or other harmful components.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all 
          of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied 
          to the greatest extent enforceable under applicable law.
        </p>
      </>
    ),
  },
  {
    id: 'governing-law',
    number: '07',
    title: 'Governing Law',
    content: (
      <>
        <p>
          The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. 
          Your use of the Application may also be subject to other local, state, national, or international laws.
        </p>
      </>
    ),
  },
  {
    id: 'disputes-resolution',
    number: '08',
    title: 'Disputes Resolution',
    content: (
      <>
        <p>
          If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
        </p>
      </>
    ),
  },
  {
    id: 'eu-users',
    number: '09',
    title: 'For European Union (EU) Users',
    content: (
      <>
        <p>
          If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.
        </p>
      </>
    ),
  },
  {
    id: 'us-legal-compliance',
    number: '10',
    title: 'United States Legal Compliance',
    content: (
      <>
        <p>
          You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, 
          or that has been designated by the United States government as a &ldquo;terrorist supporting&rdquo; country, and (ii) You are not listed 
          on any United States government list of prohibited or restricted parties.
        </p>
      </>
    ),
  },
  {
    id: 'severability-waiver',
    number: '11',
    title: 'Severability and Waiver',
    content: (
      <>
        <h3 className="terms-subheading">Severability</h3>
        <p>
          If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish 
          the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
        </p>

        <h3 className="terms-subheading" style={{ marginTop: '1.5rem' }}>Waiver</h3>
        <p>
          Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party’s 
          ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
        </p>
      </>
    ),
  },
  {
    id: 'translation-interpretation',
    number: '12',
    title: 'Translation Interpretation',
    content: (
      <>
        <p>
          These Terms and Conditions may have been translated if We have made them available to You on our Service. 
          You agree that the original English text shall prevail in the case of a dispute.
        </p>
      </>
    ),
  },
  {
    id: 'changes-to-terms',
    number: '13',
    title: 'Changes to These Terms and Conditions',
    content: (
      <>
        <p>
          We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make 
          reasonable efforts to provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will 
          be determined at Our sole discretion.
        </p>
        <p>
          By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. 
          If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
        </p>
      </>
    ),
  },
  {
    id: 'contact-us',
    number: '14',
    title: 'Contact Us',
    content: (
      <>
        <p>
          If you have any questions about this Terms and Conditions, You can contact us by email:
        </p>
        <div className="legal-contact-box">
          <div className="legal-contact-box__item">
            <span className="legal-contact-box__label">Company</span>
            <span className="legal-contact-box__value">Amada Realty LLC.</span>
          </div>
          <div className="legal-contact-box__item">
            <span className="legal-contact-box__label">Address</span>
            <span className="legal-contact-box__value">Iris Bay, Misa Business Center, Business Bay, Dubai, UAE</span>
          </div>
          <div className="legal-contact-box__item">
            <span className="legal-contact-box__label">Email</span>
            <a href="mailto:office@amadarealty.com" className="legal-contact-box__link">
              office@amadarealty.com
            </a>
          </div>
          <div className="legal-contact-box__item">
            <span className="legal-contact-box__label">Website</span>
            <a href="https://amadarealty.com/" target="_blank" rel="noopener noreferrer" className="legal-contact-box__link">
              https://amadarealty.com/
            </a>
          </div>
        </div>
      </>
    ),
  },
]

function TermsPage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id)
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(SECTIONS[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <SiteHeader />
      <main className="terms-main">
        <HeroSection
          eyebrow="Legal & Governance"
          title={
            <>
              <span>Terms & Conditions</span>
              <span className="terms-hero__sub">Amada Realty LLC</span>
            </>
          }
          lede=""
          ctaLink="#terms-content"
          ctaLabel="View Terms"
          showCta={false}
          align="left"
          compact={true}
        />

        <section className="terms-content-section" id="terms-content" aria-label="Terms content">
          <div className="container terms-layout">
            {/* Sticky Table of Contents */}
            <aside className="terms-sidebar" aria-label="Table of contents">
              <div className="terms-sidebar__card">
                <p className="terms-sidebar__heading">CONTENTS</p>
                <nav className="terms-nav">
                  {SECTIONS.map((sec) => (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => scrollTo(sec.id)}
                      className={`terms-nav__item ${activeSection === sec.id ? 'terms-nav__item--active' : ''}`}
                    >
                      <span className="terms-nav__num">{sec.number}</span>
                      <span className="terms-nav__label">{sec.title}</span>
                    </button>
                  ))}
                </nav>

                <div className="terms-sidebar__footer">
                  <p className="terms-sidebar__date">Last updated: May 09, 2025</p>
                  <LabelSlideButton
                    label="Get in Touch"
                    link="/contact"
                    newTab={false}
                    padding="8px 14px"
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
                      width: '100%',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  />
                </div>
              </div>
            </aside>

            {/* Main Articles List */}
            <article className="terms-articles">
              <div className="terms-header-meta">
                <span className="terms-badge">TERMS & CONDITIONS</span>
                <span className="terms-meta-date">Last updated: May 09, 2025</span>
              </div>

              <p className="terms-lead-note">
                Please read these terms and conditions carefully before using Our Service.
              </p>

              {SECTIONS.map((sec) => (
                <section key={sec.id} id={sec.id} className="terms-block">
                  <header className="terms-block__header">
                    <span className="terms-block__number">{sec.number}</span>
                    <h2 className="terms-block__title">{sec.title}</h2>
                  </header>
                  <div className="terms-block__body">{sec.content}</div>
                </section>
              ))}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default TermsPage
