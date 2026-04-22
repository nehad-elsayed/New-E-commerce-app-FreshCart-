
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import freshCartLogo from "../../assets/FreshCartLogo.png";
import type { ApiError, LoginFormData, LoginPayload, LoginResponse } from "../../types/types";



// ─── API function ─────────────────────────────────────────────────────────────

async function loginUser(payload: LoginPayload): Promise<LoginResponse> {
  const { data } = await axios.post<LoginResponse>(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    payload
  );
  return data;
}

function EyeOpenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
      <path strokeLinecap="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function EyeClosedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
      <path strokeLinecap="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: { remember: false },
  });

  const { mutate, isPending, isSuccess, error } = useMutation<
    LoginResponse,
    AxiosError<ApiError>,
    LoginPayload
  >({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      setTimeout(() => navigate("/"), 1200);
    },
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
        <h1 className="mb-1 text-xl font-semibold text-gray-900">Welcome back</h1>
        <p className="mb-6 text-sm text-gray-500">Sign in to your account to continue</p>

        {/* ── Success Banner ── */}
        {isSuccess && (
          <div className="mb-5 flex items-center gap-2.5 rounded-lg border border-green-200 bg-green-50 px-3 py-2.5 text-sm text-green-700">
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            Signed in successfully! Redirecting…
          </div>
        )}

        {/* ── API Error Banner ── */}
        {apiErrorMessage && (
          <div className="mb-5 flex items-center gap-2.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-600">
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>
            {apiErrorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">

          {/* ── Email ── */}
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-600">
              Email address
            </label>
            <div className="relative flex items-center">
              <svg className="pointer-events-none absolute left-3 h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required.",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email." },
                })}
                className={[
                  "h-10 w-full rounded-lg border bg-gray-50 pl-9 pr-3 text-sm text-gray-900 outline-none transition",
                  "placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20",
                  errors.email ? "border-red-400 ring-2 ring-red-400/20" : "border-gray-200",
                ].join(" ")}
              />
            </div>
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* ── Password ── */}
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-600">
              Password
            </label>
            <div className="relative flex items-center">
              <svg className="pointer-events-none absolute left-3 h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required.",
                  minLength: { value: 6, message: "Password must be at least 6 characters." },
                })}
                className={[
                  "h-10 w-full rounded-lg border bg-gray-50 pl-9 pr-10 text-sm text-gray-900 outline-none transition",
                  "placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20",
                  errors.password ? "border-red-400 ring-2 ring-red-400/20" : "border-gray-200",
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
              <p className="mt-1.5 text-xs text-red-500">{errors.password.message}</p>
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
            <NavLink to="/forgot-password" className="text-sm font-medium text-green-600 hover:underline">
              Forgot password?
            </NavLink>
          </div>

          {/* ── Submit ── */}
          <button
            type="submit"
            disabled={isPending || isSuccess}
            className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-green-500 text-sm font-medium text-white transition hover:bg-green-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-green-300"
          >
            {isPending ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
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

        {/* ── Google ── */}
        <button
          type="button"
          className="flex h-10 w-full items-center justify-center gap-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 transition hover:bg-gray-50 active:scale-[0.99]"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        {/* ── Footer ── */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <NavLink to="/register" className="font-medium text-green-600 hover:underline">
            Create one
          </NavLink>
        </p>

      </div>
    </div>
  );
}