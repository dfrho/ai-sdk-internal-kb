import posthog from 'posthog-js'
import { PostHog } from 'posthog-js'

export const posthogClient: PostHog = posthog

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    const posthogKey = process.env.POSTHOG_KEY
    const posthogHost = process.env.POSTHOG_HOST || 'https://us.i.posthog.com'

    posthogClient.init(posthogKey, {
      api_host: posthogHost,
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      },
      capture_pageview: false // Disable automatic pageview capture, as we'll handle this manually
    })
  }
}