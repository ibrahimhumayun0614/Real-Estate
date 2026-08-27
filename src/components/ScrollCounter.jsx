import { useEffect, useRef, useState } from 'react'

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function parseValue(value) {
  const match = String(value).match(/^(\d+)(.*)$/)
  if (!match) return { digits: [], suffix: value }
  return {
    digits: match[1].split('').map((d) => Number(d)),
    suffix: match[2] || '',
  }
}

function DigitColumn({ digit, active, delay }) {
  return (
    <span className="rt-counter-v1__slot" aria-hidden="true">
      <span
        className={`rt-counter-train${active ? ' is-active' : ''}`}
        style={{
          transitionDelay: active ? `${delay}ms` : '0ms',
          transform: active
            ? `translate3d(0, -${digit * 10}%, 0)`
            : 'translate3d(0, 0, 0)',
        }}
      >
        {DIGITS.map((n) => (
          <span key={n} className="rt-counter-train__item">
            {n}
          </span>
        ))}
      </span>
    </span>
  )
}

export default function ScrollCounter({ value, className = '' }) {
  const rootRef = useRef(null)
  const [active, setActive] = useState(false)
  const { digits, suffix } = parseValue(value)

  useEffect(() => {
    const node = rootRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <p
      ref={rootRef}
      className={`rt-counter-v1 ${className}`.trim()}
      aria-label={value}
    >
      <span className="rt-counter-v1__digits">
        {digits.map((digit, index) => (
          <DigitColumn
            key={`${digit}-${index}`}
            digit={digit}
            active={active}
            delay={index * 120}
          />
        ))}
      </span>
      {suffix ? <span className="rt-counter-v1__suffix">{suffix}</span> : null}
    </p>
  )
}
