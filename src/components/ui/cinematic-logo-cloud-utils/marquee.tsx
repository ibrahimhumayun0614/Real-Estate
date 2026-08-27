import * as React from 'react'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  speed?: number
  pauseOnHover?: boolean
  reverse?: boolean
}

export function Marquee({
  children,
  className,
  speed = 40,
  pauseOnHover = true,
  reverse = false,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'group relative flex w-full overflow-hidden',
        '[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]',
        className,
      )}
    >
      <div
        className={cn(
          'flex w-max min-w-full shrink-0 items-center gap-4 py-1',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          'flex w-max min-w-full shrink-0 items-center gap-4 py-1',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  )
}
