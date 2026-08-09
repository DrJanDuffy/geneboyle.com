// This file configures the initialization of Sentry on the client.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Keep client weight low for mobile PageSpeed.
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0.1,

  debug: false,

  // Session Replay is omitted on purpose — it is the largest Sentry client
  // chunk (~40–110 KiB) and dominated unused-JavaScript on the homepage.
  // Error + performance monitoring remain enabled above.
});
