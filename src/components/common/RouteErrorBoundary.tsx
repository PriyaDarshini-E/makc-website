import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Catches lazy-chunk load failures and render errors in routes so users get a
 * retry affordance instead of a blank screen (and INP doesn't freeze).
 * Rendered only on error — zero impact on the success path.
 */
export default class RouteErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // Log for diagnostics; keep the UI recoverable.
    console.error("[RouteErrorBoundary]", error);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-bg-main px-6 text-center">
          <p className="text-text-main font-semibold">
            Something went wrong loading this page.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-full bg-accent-blue px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-blue/90 transition-colors cursor-pointer"
          >
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
