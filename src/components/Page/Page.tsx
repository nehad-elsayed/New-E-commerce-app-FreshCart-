import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../ErrorBoundary/ErrorFallback";
import Loadingscreen from "../LoadingScreen/Loadingscreen";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loadingscreen />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}
