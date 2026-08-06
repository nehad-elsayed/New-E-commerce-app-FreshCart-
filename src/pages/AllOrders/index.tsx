import { Link } from "react-router-dom";
import useUserOrders from "../../hooks/useUserOrders";
import type { UserOrder } from "../../types/types";

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function StatusBadge({
  label,
  tone,
}: {
  label: string;
  tone: "success" | "warning" | "muted";
}) {
  const tones = {
    success: "bg-emerald-50 text-emerald-700",
    warning: "bg-amber-50 text-amber-700",
    muted: "bg-gray-100 text-gray-600",
  };

  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}>
      {label}
    </span>
  );
}

function EmptyOrders() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50/80 px-6 py-16 text-center">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-10 w-10 text-primary"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900">No orders yet</h3>
      <p className="mt-2 max-w-sm text-sm text-gray-500">
        When you place an order, it will show up here.
      </p>
      <Link
        to="/products"
        className="mt-6 inline-flex items-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
      >
        Start shopping
      </Link>
    </div>
  );
}

function OrderCard({ order }: { order: UserOrder }) {
  const orderNumber = order.id ?? order._id.slice(-6).toUpperCase();
  const items = order.cartItems ?? [];

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 bg-gray-50/70 px-4 py-4 sm:px-6">
        <div>
          <p className="text-sm font-semibold text-gray-900">Order #{orderNumber}</p>
          <p className="mt-0.5 text-xs text-gray-500">{formatDate(order.createdAt ?? "")}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge
            label={order.isPaid ? "Paid" : "Unpaid"}
            tone={order.isPaid ? "success" : "warning"}
          />
          <StatusBadge
            label={order.isDelivered ? "Delivered" : "Processing"}
            tone={order.isDelivered ? "success" : "muted"}
          />
          <StatusBadge
            label={order.paymentMethodType === "card" ? "Card" : "Cash"}
            tone="muted"
          />
        </div>
      </div>

      <div className="divide-y divide-gray-100 px-4 sm:px-6">
        {items.map((item) => {
          const product = item.product;
          const productId = product?._id || product?.id;

          return (
            <div key={item._id} className="flex gap-4 py-4">
              <Link
                to={productId ? `/prouductDetails/${productId}` : "/products"}
                className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-50"
              >
                <img
                  src={product?.imageCover}
                  alt={product?.title}
                  className="h-full w-full object-cover"
                />
              </Link>

              <div className="min-w-0 flex-1">
                <Link
                  to={productId ? `/prouductDetails/${productId}` : "/products"}
                  className="line-clamp-2 text-sm font-semibold text-gray-900 transition hover:text-primary"
                >
                  {product?.title ?? "Product"}
                </Link>
                <p className="mt-1 text-xs text-gray-500">
                  Qty: {item.count} · {item.price.toLocaleString()} EGP each
                </p>
              </div>

              <p className="shrink-0 text-sm font-bold text-primary-dark">
                {(item.price * item.count).toLocaleString()} EGP
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4 border-t border-gray-100 px-4 py-4 sm:px-6">
        <div className="text-sm text-gray-500">
          {order.shippingAddress ? (
            <>
              <p className="font-medium text-gray-700">
                {order.shippingAddress.city} · {order.shippingAddress.phone}
              </p>
              <p className="mt-0.5 line-clamp-2">{order.shippingAddress.details}</p>
            </>
          ) : (
            <p>No shipping address</p>
          )}
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-400">Total</p>
          <p className="text-lg font-bold text-primary-dark">
            {order.totalOrderPrice?.toLocaleString() ?? "0.00"} EGP
          </p>
        </div>
      </div>
    </article>
  );
}

export default function AllOrders() {
  const { data: orders } = useUserOrders();
  const list = orders ?? [];

  return (
    <div className="mx-auto max-w-4xl px-4">
      <title>All Orders</title>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary-dark md:text-4xl">Your Orders</h2>
        <p className="mt-1 text-sm text-gray-500">
          {list.length === 0
            ? "No orders yet"
            : `${list.length} ${list.length === 1 ? "order" : "orders"}`}
        </p>
      </div>

      {list.length === 0 ? (
        <EmptyOrders />
      ) : (
        <div className="space-y-5">
          {list.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}
