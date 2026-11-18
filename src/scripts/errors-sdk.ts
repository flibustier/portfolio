import {
  BrowserClient,
  captureException,
  dedupeIntegration,
  defaultStackParser,
  getCurrentScope,
  linkedErrorsIntegration,
  makeFetchTransport,
} from "@sentry/browser";

// Loaded by errors.ts after the first error only. The DSN comes from errors.ts.

export const start = (dsn: string) => {
  const client = new BrowserClient({
    dsn,
    environment: location.hostname === "jonathan.pl" ? "production" : "local",
    transport: makeFetchTransport,
    stackParser: defaultStackParser,
    // No breadcrumbs, no tracing, no replay: only the error itself
    integrations: [linkedErrorsIntegration(), dedupeIntegration()],
    // Nothing about the visitor: no user, cookies, headers, bodies or query strings
    dataCollection: {
      userInfo: false,
      cookies: false,
      httpHeaders: false,
      httpBodies: [],
      urlQueryParams: false,
    },
    // Add the host to "Failed to fetch" in the report only: the page's own error stays the same
    enhanceFetchErrorMessages: "report-only",
    beforeSend(event) {
      event.request = {
        url: location.origin + location.pathname,
        headers: { "User-Agent": navigator.userAgent },
      };
      // A rejected object is copied here in full: keep its keys only, they are in the title
      if (event.extra?.__serialized__) delete event.extra.__serialized__;
      return event;
    },
  });
  getCurrentScope().setClient(client);
  client.init();

  return (error: unknown) => captureException(error);
};
