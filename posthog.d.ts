declare namespace NodeJS {
    interface ProcessEnv {
      POSTHOG_KEY: string;
      POSTHOG_HOST?: string;
    }
  }