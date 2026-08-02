import { Link } from "react-router-dom";
import type { Product } from "../../types/types";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import AddToWishlistButton from "../AddToWishlistButton/AddToWishlistButton";

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

const ProductCard = ({ product }: { product: Product }) => {
  const detailsPath = `/prouductDetails/${product._id}`;

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md">
      <div className="relative overflow-hidden bg-gray-50">
        <Link to={detailsPath} className="block aspect-square">
          <img
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            src={product.imageCover}
            alt={product.title}
            loading="lazy"
          />
        </Link>

        <div className="absolute right-3 top-3">
          <AddToWishlistButton />
        </div>

        {product.category?.name && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-primary-dark shadow-sm backdrop-blur-sm">
            {product.category.name}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        {product.brand?.name && (
          <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
            {product.brand.name}
          </p>
        )}

        <Link to={detailsPath} className="block">
          <h3 className="line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-gray-900 transition group-hover:text-primary">
            {product.title}
          </h3>
        </Link>

        <div className="mt-auto flex items-center justify-between gap-2">
          <p className="text-lg font-bold text-primary-dark">
            {product.price.toLocaleString()}
            <span className="ml-1 text-xs font-semibold text-gray-400">EGP</span>
          </p>

          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-600">
            <StarIcon className="h-3.5 w-3.5" />
            {product.ratingsAverage?.toFixed(1) ?? "—"}
          </span>
        </div>

        <AddToCartButton productId={product._id} className="w-full" />
      </div>
    </article>
  );
};

export default ProductCard;
