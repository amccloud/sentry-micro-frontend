
import init_micro_sentry from "./methods/flex-micro";

delete window.SENTRY_INIT_METHODS; // Unsetting harness helpers

export function init(options) {
  return init_micro_sentry(
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
    options.environment,
    options.release,
    options.integrations
  );
}
