'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { CookieBanner } from '@/components/cookie-banner';

if (typeof window !== 'undefined') {
  const consent = localStorage.getItem('cookie-consent');

  posthog.init(process.env.POSTHOG_KEY || '', {
    api_host: process.env.POSTHOG_HOST || 'https://us.i.posthog.com',
    person_profiles: 'always',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug();
      if (!consent || consent === 'false') {
        posthog.opt_out_capturing();
      }
    },
    capture_pageview: true,
  });
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      {children}
      <CookieBanner />
    </PostHogProvider>
  );
}
