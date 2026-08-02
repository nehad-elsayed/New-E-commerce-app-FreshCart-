export default function AddToWishlistButton() {
  return (
    <button
      type="button"
      aria-label="Add to wishlist"
      className="flex h-9 cursor-pointer w-9 items-center justify-center rounded-full bg-white/90 text-gray-400 shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-red-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    </button>
  );
}
