import LabelSlideButton from './LabelSlideButton'

function HeroSection({
  eyebrow,
  title,
  lede = 'Where people matter. Where action delivers.',
  ctaLabel = 'Find your dream home',
  ctaLink = '#contact',
  showCta = true,
  align = 'center',
}) {
  const defaultTitle = (
    <>
      Numbers aren&apos;t everything,
      <br />
      but being No. 1 sure feels good
    </>
  )

  return (
    <section
      className={`hero${align === 'left' ? ' hero--left' : ''}`}
      aria-label="Hero"
    >
      <video
        className="hero__video"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="hero__veil" aria-hidden="true" />

      <div className="container hero__content">
        {eyebrow ? <p className="hero__eyebrow">{eyebrow}</p> : null}

        <h1>{title ?? defaultTitle}</h1>

        {lede ? <p className="hero__lede">{lede}</p> : null}

        {showCta ? (
          <LabelSlideButton
            label={ctaLabel}
            link={ctaLink}
            newTab={false}
            padding="8px 14px"
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
        ) : null}
      </div>
    </section>
  )
}

export default HeroSection
