'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined') {
  posthog.init(process.env.POSTHOG_KEY || '', {
    api_host: process.env.POSTHOG_HOST || 'https://us.i.posthog.com',
  });
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
