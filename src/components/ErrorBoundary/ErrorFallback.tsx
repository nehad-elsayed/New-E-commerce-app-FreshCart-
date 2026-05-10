import type { FallbackProps } from "react-error-boundary";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const message = error instanceof Error ? error.message : "Something went wrong";
  return (
    <div role="alert">
      <h2>Something went wrong</h2>
      <pre>{message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
