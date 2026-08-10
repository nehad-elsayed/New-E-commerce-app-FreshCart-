import { useToggleWishlist } from "../../hooks/useToggleWishlist";

export default function AddToWishlistButton({
  productId,
  className = "",
}: {
  productId: string;
  className?: string;
}) {
  const { isInWishlist, isPending, toggleWishlist } = useToggleWishlist(productId);

  return (
    <button
      type="button"
      aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      disabled={isPending}
      onClick={toggleWishlist}
      className={[
        "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm transition disabled:opacity-60",
        isInWishlist
          ? "text-red-500 hover:bg-red-50"
          : "text-gray-400 hover:bg-white hover:text-red-500",
        className,
      ].join(" ")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isInWishlist ? "currentColor" : "none"}
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
