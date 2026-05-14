import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import freshCartLogo from "../../assets/FreshCartLogo.png";
import useRegister from "../../hooks/useRegister";
import { Link } from "react-router-dom";
import FieldError from "../../components/FieldError";
import EyeOpenIcon from "../../components/EyeOpenIcon";
import EyeClosedIcon from "../../components/EyeClosedIcon";


const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z
      .string()
      .min(1, "Email is required.")
      .email("Please enter a valid email."),
    phone: z
      .string()
      .min(1, "Phone is required.")
      .regex(
        /^01[0125][0-9]{8}$/,
        "Please enter a valid Egyptian phone number.",
      ),
    password: z
      .string()
      .min(1, "Password is required.")
      .min(6, "Password must be at least 6 characters."),
    rePassword: z.string().min(1, "Please confirm your password."),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match.",
    path: ["rePassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const { mutate, isPending, isSuccess } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });


  const onSubmit = (data: RegisterFormData) => {
    mutate({
      name: data.name,
      email: data.email,
      password: data.password,
      rePassword: data.rePassword,
      phone: data.phone,
    });
  };



  const inputClass = (hasError: boolean) =>
    [
      "h-10 w-full rounded-lg border bg-gray-50 pl-2 pr-3 text-sm text-gray-900 outline-none transition",
      "placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20",
      hasError ? "border-red-400 ring-2 ring-red-400/20" : "border-gray-200",
    ].join(" ");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
            <title>Register</title>

      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        {/* ── Brand ── */}
        <div className="mb-7 flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-light">
            <img src={freshCartLogo} alt="" className=" w-auto" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-900">
            Fresh<span className="text-primary">Cart</span>
          </span>
        </div>

        <h1 className="mb-1 text-xl font-semibold text-gray-900">
          Create an account
        </h1>
        <p className="mb-6 text-sm text-gray-500">
          Sign up to start shopping with FreshCart
        </p>


        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-4"
        >
          {/*  nameeeee input *********/}

          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-gray-600"
            >
              Full name
            </label>
            <div className="relative">
          
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Nehad . . ."
                {...register("name")}
                className={inputClass(!!errors.name)}
              />
            </div>
            <FieldError message={errors.name?.message} />
          </div>

          {/* email input ********* */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-gray-600"
            >
              Email address
            </label>
            <div className="relative flex items-center">
              
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                {...register("email")}
                className={inputClass(!!errors.email)}
              />
            </div>
            <FieldError message={errors.email?.message} />
          </div>

          {/* phoneeee input ******* */}
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-sm font-medium text-gray-600"
            >
              Phone number
            </label>
            <div className="relative flex items-center">
            
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="010xxxxxxxx"
                {...register("phone")}
                className={inputClass(!!errors.phone)}
              />
            </div>
            <FieldError message={errors.phone?.message} />
          </div>

          {/* ── password input *********** ── */}
          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="relative flex items-center">
           
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="••••••••"
                {...register("password")}
                className={[inputClass(!!errors.password), "pr-10"].join(" ")}
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
            <FieldError message={errors.password?.message} />
          </div>

        {/* confirm password input */}
          <div>
            <label
              htmlFor="rePassword"
              className="mb-1.5 block text-sm font-medium text-gray-600"
            >
              Confirm password
            </label>
            <div className="relative flex items-center">
              
              <input
                id="rePassword"
                type={showRePassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="••••••••"
                {...register("rePassword")}
                className={[inputClass(!!errors.rePassword), "pr-10"].join(" ")}
              />
              <button
                type="button"
                onClick={() => setShowRePassword((v) => !v)}
                aria-label={showRePassword ? "Hide password" : "Show password"}
                className="absolute right-2.5 rounded p-1 text-gray-400 hover:text-gray-600"
              >
                {showRePassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </button>
            </div>
            <FieldError message={errors.rePassword?.message} />
          </div>

          {/* submit */}
          <button
            type="submit"
            disabled={isPending || isSuccess}
            className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-primary-light text-sm font-medium text-white transition hover:bg-green-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-green-300"
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
                Creating account…
              </>
            ) : (
              "Create account"
            )}
          </button>
        </form>

        {/* ── Footer ── */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-primary hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
