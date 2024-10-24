import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init(process.env.POSTHOG_KEY as string, {
    api_host: process.env.POSTHOG_HOST || 'https://us.i.posthog.com',
    person_profiles: 'identified_only'
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug()
    },
    capture_pageview: false // Disable automatic pageview capture, as we'll handle this manually
  })
}

export { posthog, PostHogProvider }