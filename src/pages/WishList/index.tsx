import { Link } from "react-router-dom";
import useWishlist from "../../hooks/useWishlist";
import ProductCard from "../../components/ProductCard/ProductCard";

function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50/80 px-6 py-16 text-center">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-10 w-10 text-red-500"
          aria-hidden
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900">Your wishlist is empty</h3>
      <p className="mt-2 max-w-sm text-sm text-gray-500">
        Save products you love and come back to them anytime.
      </p>
      <Link
        to="/products"
        className="mt-6 inline-flex items-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
      >
        Browse products
      </Link>
    </div>
  );
}

export default function WishList() {
  const { data: wishlist } = useWishlist();
  const products = wishlist?.data ?? [];
  const count = wishlist?.count ?? products.length;

  return (
    <div className="mx-auto max-w-6xl px-4">
      <title>Wishlist</title>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary-dark md:text-4xl">Your Wishlist</h2>
        <p className="mt-1 text-sm text-gray-500">
          {count === 0
            ? "No saved items yet"
            : `${count} ${count === 1 ? "item" : "items"} saved`}
        </p>
      </div>

      {products.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      )}
    </div>
  );
}
