import { RingLoader } from "react-spinners";

export default function Loadingscreen() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-50"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <RingLoader color="#16a34a" size={64} speedMultiplier={0.9} />
      <p className="text-sm font-medium tracking-wide text-slate-600">
        Loading…
      </p>
    </div>
  );
}
