import initMicro from "./methods/flex-micro";

delete window.SENTRY_INIT_METHODS; // Unsetting harness helpers

export function init(options) {
  return initMicro(
    options.tracing,
    options.debug,
    options.initialScope,
    options.tracePropagationTargets,
    options.sentrySdkSrc,
    options.sentryInitMaxWait,
    options.name,
    options.matcher,
    options.sdk,
    options.dsn,
    options.release,
    options.integrations
  );
}
