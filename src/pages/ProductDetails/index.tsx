import { useState } from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";
import AddToWishlistButton from "../../components/AddToWishlistButton/AddToWishlistButton";
import useProductDetails from "../../hooks/useProductDetails";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export default function ProductDetails() {
  const { data: product } = useProductDetails();
  const gallery = [product.imageCover, ...(product.images ?? [])].filter(
    (src, index, arr) => Boolean(src) && arr.indexOf(src) === index,
  );
  const [activeImage, setActiveImage] = useState(gallery[0] ?? product.imageCover);
  const [syncedProductId, setSyncedProductId] = useState(product._id);
  const inStock = (product.quantity ?? 0) > 0;

  if (product._id !== syncedProductId) {
    setSyncedProductId(product._id);
    setActiveImage(gallery[0] ?? product.imageCover);
  }

  return (
    <div className="mx-auto max-w-6xl px-4">
      <title>{product.title ? `${product.title} | FreshCart` : "Product Details"}</title>

      <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
        <Link to="/" className="transition hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <Link to="/products" className="transition hover:text-primary">
          Products
        </Link>
        <span>/</span>
        <span className="line-clamp-1 font-medium text-gray-800">{product.title}</span>
      </nav>

      <Link
        to="/products"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-gray-500 transition hover:text-primary"
      >
        <ChevronLeftIcon className="h-4 w-4" />
        Back to products
      </Link>

      <div className="grid gap-8 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl bg-gray-50">
            <img
              src={activeImage}
              alt={product.title}
              className="aspect-square w-full object-cover"
            />
          </div>

          {gallery.length > 1 && (
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
              {gallery.map((src) => {
                const isActive = src === activeImage;
                return (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImage(src)}
                    className={[
                      "overflow-hidden rounded-xl border-2 bg-gray-50 transition",
                      isActive
                        ? "border-primary shadow-sm"
                        : "border-transparent hover:border-gray-200",
                    ].join(" ")}
                    aria-label="View product image"
                    aria-pressed={isActive}
                  >
                    <img src={src} alt="" className="aspect-square w-full object-cover" />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              {product.brand?.name && (
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {product.brand.name}
                </p>
              )}
              <h1 className="mt-1 text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
                {product.title}
              </h1>
            </div>
            <AddToWishlistButton productId={product._id} />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {product.category?.name && (
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-primary-dark">
                {product.category.name}
              </span>
            )}

            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-600">
              <StarIcon className="h-3.5 w-3.5" />
              {product.ratingsAverage?.toFixed(1) ?? "—"}
              {product.ratingsQuantity != null && (
                <span className="font-medium text-amber-500/80">
                  ({product.ratingsQuantity})
                </span>
              )}
            </span>

            <span
              className={[
                "rounded-full px-3 py-1 text-xs font-semibold",
                inStock ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600",
              ].join(" ")}
            >
              {inStock ? "In stock" : "Out of stock"}
            </span>
          </div>

          <p className="mt-6 text-3xl font-bold text-primary-dark">
            {product.price?.toLocaleString()}
            <span className="ml-1.5 text-sm font-semibold text-gray-400">EGP</span>
          </p>

          <div className="mt-6 border-t border-gray-100 pt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Description
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
              {product.description}
            </p>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {product.quantity != null && (
              <div className="rounded-xl bg-gray-50 px-4 py-3">
                <dt className="text-xs text-gray-400">Available</dt>
                <dd className="mt-0.5 font-semibold text-gray-800">{product.quantity} units</dd>
              </div>
            )}
            {product.sold != null && (
              <div className="rounded-xl bg-gray-50 px-4 py-3">
                <dt className="text-xs text-gray-400">Sold</dt>
                <dd className="mt-0.5 font-semibold text-gray-800">{product.sold}</dd>
              </div>
            )}
          </dl>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
            <AddToCartButton
              productId={product._id}
              className="w-full flex-1 px-6 py-3 text-base sm:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
