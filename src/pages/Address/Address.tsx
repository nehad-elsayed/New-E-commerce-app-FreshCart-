import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FieldError from "../../components/FieldError";
import useCartProducts from "../../hooks/useCartProducts";
import useCheckout from "../../hooks/useCheckout";

const addressSchema = z.object({
  details: z
    .string()
    .min(1, "Address details are required.")
    .min(5, "Please enter a more complete address."),
  phone: z
    .string()
    .min(1, "Phone number is required.")
    .regex(/^01[0125][0-9]{8}$/, "Please enter a valid Egyptian phone number."),
  city: z
    .string()
    .min(1, "City is required.")
    .min(2, "Please enter a valid city name."),
});

export type AddressFormData = z.infer<typeof addressSchema>;

export default function Address() {
  const { cartId } = useParams<{ cartId: string }>();
  const { data: cart } = useCartProducts();
  const { mutate: checkout, isPending } = useCheckout();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
  });

  const inputClass = (hasError: boolean) =>
    [
      "h-11 w-full rounded-xl border bg-gray-50 px-3 text-sm text-gray-900 outline-none transition",
      "placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20",
      hasError ? "border-red-400 ring-2 ring-red-400/20" : "border-gray-200",
    ].join(" ");

  const onSubmit = (data: AddressFormData) => {
    if (!cartId) {
      return;
    }

    checkout({
      cartId,
      shippingAddress: {
        details: data.details,
        phone: data.phone,
        city: data.city,
      },
    });
  };

  const totalPrice = cart?.data?.totalCartPrice ?? 0;
  const itemCount = cart?.numOfCartItems ?? 0;

  return (
    <div className="mx-auto max-w-3xl px-4">
      <title>Shipping Address</title>

      <div className="mb-8">
        <Link
          to="/cart"
          className="mb-4 inline-flex text-sm font-medium text-gray-500 transition hover:text-primary"
        >
          ← Back to cart
        </Link>
        <h2 className="text-2xl font-bold text-primary-dark md:text-4xl">Shipping Address</h2>
        <p className="mt-1 text-sm text-gray-500">
          Enter your delivery details to complete the order
          {itemCount > 0 ? ` · ${itemCount} ${itemCount === 1 ? "item" : "items"}` : ""}
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          <div>
            <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-gray-600">
              Address details
            </label>
            <textarea
              id="details"
              rows={3}
              autoComplete="street-address"
              placeholder="Street, building, floor, apartment..."
              {...register("details")}
              className={[
                "w-full resize-none rounded-xl border bg-gray-50 px-3 py-2.5 text-sm text-gray-900 outline-none transition",
                "placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20",
                errors.details ? "border-red-400 ring-2 ring-red-400/20" : "border-gray-200",
              ].join(" ")}
            />
            <FieldError message={errors.details?.message} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-600">
                Phone number
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="010xxxxxxxx"
                {...register("phone")}
                className={inputClass(!!errors.phone)}
              />
              <FieldError message={errors.phone?.message} />
            </div>

            <div>
              <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-gray-600">
                City
              </label>
              <input
                id="city"
                type="text"
                autoComplete="address-level2"
                placeholder="Cairo"
                {...register("city")}
                className={inputClass(!!errors.city)}
              />
              <FieldError message={errors.city?.message} />
            </div>
          </div>

          {totalPrice > 0 && (
            <div className="flex items-center justify-between rounded-xl bg-green-50 px-4 py-3 text-sm">
              <span className="font-medium text-gray-600">Order total</span>
              <span className="text-lg font-bold text-primary-dark">
                {totalPrice.toLocaleString()} EGP
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={isPending || itemCount === 0}
            className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Redirecting to payment..." : "Place order"}
          </button>
        </form>
      </div>
    </div>
  );
}
