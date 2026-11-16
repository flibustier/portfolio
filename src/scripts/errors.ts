// Errors in the browser are sent to Bugsink (https://bug.cracking.ovh), which speaks the Sentry
// protocol. The Sentry SDK weighs about 20 KB gzipped, so it is only downloaded after the first
// error: a visit without errors costs nothing. Only production builds report.
//
// An inline script in Layout.astro listens from the start of the page and keeps the errors in
// window.__errors. This module runs later: it reports them, then reports the next ones directly.

declare global {
  interface Window {
    __errors?: unknown[] | { push: (error: unknown) => void };
  }
}

type Send = (error: unknown) => void;

let sdk: Promise<Send> | undefined;

const report = (error: unknown) => {
  sdk ??= import("./errors-sdk").then(({ start }) => start());
  // If the SDK can't be loaded (offline…), there is nothing more to do
  sdk.then((send) => send(error)).catch(() => {});
};

if (import.meta.env.PROD) {
  const queued = Array.isArray(window.__errors) ? window.__errors : [];
  window.__errors = { push: report };
  queued.forEach(report);
}

export {};
