import posthog from 'posthog-js'
import { PostHog } from 'posthog-js'
import getConfig from 'next/config'

export const posthogClient: PostHog = posthog

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    const posthogHost = process.env.POSTHOG_HOST || 'https://us.i.posthog.com'
    const posthogKey = process.env.POSTHOG_KEY || ''

        posthogClient.init(posthogKey, {
          api_host: posthogHost,
          person_profiles: 'always',
          loaded: (posthog) => {
            if (process.env.NODE_ENV === 'development') posthog.debug()
          },
        })
        console.log('PostHog initialized with automatic pageview capture')
  
  }
}