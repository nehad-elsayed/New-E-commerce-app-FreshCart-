import { Link } from "react-router-dom";
import type { Product2 } from "../../types/types";

import { useState, type ChangeEvent, type KeyboardEvent } from "react";

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6" />
    </svg>
  );
}

function CartItem({
  item,
  isUpdating,
  isRemoving,
  onUpdate,
  onRemove,
}: {
  item: Product2;
  isUpdating: boolean;
  isRemoving: boolean;
  onUpdate: (productId: string, count: number) => void;
  onRemove: (productId: string) => void;
}) {
  const product = item.product;
  const productId = product._id || product.id;
  const lineTotal = item.price * item.count;
  const busy = isUpdating || isRemoving;
  const [quantityInput, setQuantityInput] = useState(String(item.count));
  const [syncedCount, setSyncedCount] = useState(item.count);

  if (item.count !== syncedCount) {
    setSyncedCount(item.count);
    setQuantityInput(String(item.count));
  }

  function commitQuantity(rawValue: string) {
    const parsed = Number.parseInt(rawValue, 10);

    if (!Number.isFinite(parsed) || parsed < 1) {
      setQuantityInput(String(item.count));
      return;
    }

    if (parsed === item.count) {
      setQuantityInput(String(item.count));
      return;
    }

    setQuantityInput(String(parsed));
    onUpdate(productId, parsed);
  }

  function handleQuantityChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setQuantityInput(value);
    }
  }

  function handleQuantityKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  }

  return (
    <article className="flex flex-col gap-4 border-b border-gray-100 py-5 last:border-b-0 sm:flex-row sm:items-center sm:gap-5">
      <Link
        to={`/prouductDetails/${productId}`}
        className="mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-50 sm:mx-0"
      >
        <img
          src={product.imageCover}
          alt={product.title}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </Link>

      <div className="min-w-0 flex-1 text-center sm:text-left">
        <Link
          to={`/prouductDetails/${productId}`}
          className="line-clamp-2 text-base font-semibold text-gray-900 transition hover:text-primary"
        >
          {product.title}
        </Link>
        <p className="mt-1 text-sm text-gray-500">
          {product.category?.name}
          {product.brand?.name ? ` · ${product.brand.name}` : ""}
        </p>
        <p className="mt-2 text-sm font-medium text-gray-700">
          {item.price.toLocaleString()} EGP
          <span className="text-gray-400"> / each</span>
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 sm:items-end">
        <div className="inline-flex items-center rounded-xl border border-gray-200 bg-white">
          <button
            type="button"
            disabled={busy || item.count <= 1}
            onClick={() => onUpdate(productId, item.count - 1)}
            className="flex cursor-pointer h-9 w-9 items-center justify-center rounded-l-xl text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            disabled={busy}
            value={quantityInput}
            onChange={handleQuantityChange}
            onBlur={() => commitQuantity(quantityInput)}
            onKeyDown={handleQuantityKeyDown}
            aria-label={`Quantity for ${product.title}`}
            className="h-9 w-14 border-x border-gray-200 bg-transparent text-center text-sm font-semibold text-gray-900 outline-none focus:bg-green-50 disabled:cursor-not-allowed disabled:opacity-40"
          />
          <button
            type="button"
            disabled={busy}
            onClick={() => onUpdate(productId, item.count + 1)}
            className="flex cursor-pointer h-9 w-9 items-center justify-center rounded-r-xl text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-base font-bold text-primary-dark">{lineTotal.toLocaleString()} EGP</p>
          <button
            type="button"
            disabled={busy}
            onClick={() => onRemove(productId)}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500 disabled:opacity-40"
            aria-label={`Remove ${product.title}`}
          >
            <TrashIcon className="h-5 w-5 cursor-pointer" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
