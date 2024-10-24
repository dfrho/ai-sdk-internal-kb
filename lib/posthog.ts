'use client'

import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
  posthog.init(process.env.POSTHOG_KEY as string, {
    api_host: process.env.POSTHOG_HOST || 'https://app.posthog.com',
    person_profiles: 'identified_only',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug()
    },
    capture_pageview: false // Disable automatic pageview capture, as we'll handle this manually
  })
}

export { posthog }