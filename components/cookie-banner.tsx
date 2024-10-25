'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { usePostHog } from 'posthog-js/react';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const posthog = usePostHog();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === null) {
      setShowBanner(true);
    } else if (consent === 'true') {
      posthog.opt_in_capturing();
    } else {
      posthog.opt_out_capturing();
    }
  }, [posthog]);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    posthog.opt_in_capturing();
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'false');
    posthog.opt_out_capturing();
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-800 dark:text-gray-200">
          We use cookies to improve your experience and analyze site usage. Read
          our{' '}
          <a
            href="/privacy-policy"
            className="underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            Privacy Policy
          </a>{' '}
          for more information.
        </p>
        <div className="flex gap-4">
          <Button
            onClick={declineCookies}
            variant="outline"
            className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            Decline
          </Button>
          <Button
            onClick={acceptCookies}
            variant="default"
            className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
