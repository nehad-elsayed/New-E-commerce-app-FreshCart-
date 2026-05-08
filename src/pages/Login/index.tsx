import { useState } from "react";
import { useForm } from "react-hook-form";
import freshCartLogo from "../../assets/FreshCartLogo.png";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import EyeClosedIcon from "../../components/EyeClosedIcon";
import EyeOpenIcon from "../../components/EyeOpenIcon";



const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email."),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(6, "Password must be at least 6 characters."),
  remember: z.boolean().default(false),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, error, isSuccess, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { remember: false },
  });

  const onSubmit = (data: LoginFormData) => {
    mutate({ email: data.email, password: data.password });
  };

  const apiErrorMessage =
    error?.response?.data?.message ?? error?.message ?? null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        {/* ── Brand ── */}
        <div className="mb-7 flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500">
            <img src={freshCartLogo} alt="" className="" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-900">
            Fresh<span className="text-green-700">Cart</span>
          </span>
        </div>

        {/* ── Heading ── */}
        <h1 className="mb-1 text-xl font-semibold text-gray-900">
          Welcome back
        </h1>
        <p className="mb-6 text-sm text-gray-500">
          Sign in to your account to continue
        </p>

        {/* ── Success Banner ── */}
        {isSuccess && (
          <div className="mb-5 flex items-center gap-2.5 rounded-lg border border-green-200 bg-green-50 px-3 py-2.5 text-sm text-green-700">
            <svg
              className="h-4 w-4 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            Signed in successfully! Redirecting…
          </div>
        )}

        {/* ── API Error Banner ── */}
        {apiErrorMessage && (
          <div className="mb-5 flex items-center gap-2.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-600">
            <svg
              className="h-4 w-4 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            {apiErrorMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-4"
        >
          {/* ── Email ── */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-gray-600"
            >
              Email address
            </label>
            <div className="relative flex items-center">
              <svg
                className="pointer-events-none absolute left-3 h-4 w-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email.",
                  },
                })}
                className={[
                  "h-10 w-full rounded-lg border bg-gray-50 pl-9 pr-3 text-sm text-gray-900 outline-none transition",
                  "placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20",
                  errors.email
                    ? "border-red-400 ring-2 ring-red-400/20"
                    : "border-gray-200",
                ].join(" ")}
              />
            </div>
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* ── Password ── */}
          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <svg
                className="pointer-events-none absolute left-3 h-4 w-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters.",
                  },
                })}
                className={[
                  "h-10 w-full rounded-lg border bg-gray-50 pl-9 pr-10 text-sm text-gray-900 outline-none transition",
                  "placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20",
                  errors.password
                    ? "border-red-400 ring-2 ring-red-400/20"
                    : "border-gray-200",
                ].join(" ")}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-2.5 rounded p-1 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* ── Remember + Forgot ── */}
          <div className="flex items-center justify-between">
            <label className="flex cursor-pointer select-none items-center gap-2 text-sm text-gray-500">
              <input
                type="checkbox"
                {...register("remember")}
                className="h-3.5 w-3.5 cursor-pointer accent-green-500"
              />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-green-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* ── Submit ── */}
          <button
            type="submit"
            disabled={isPending || isSuccess}
            className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-green-500 text-sm font-medium text-white transition hover:bg-green-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-green-300"
          >
            {isPending ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Signing in…
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        {/* ── Divider ── */}
        <div className="my-5 flex items-center gap-3 text-xs text-gray-400">
          <span className="h-px flex-1 bg-gray-100" />
          or continue with
          <span className="h-px flex-1 bg-gray-100" />
        </div>

        {/* ── Footer ── */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-green-600 hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
