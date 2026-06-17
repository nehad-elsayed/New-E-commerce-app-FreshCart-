import useAddToCart from "../../hooks/useAddToCart";

export default function AddToCartButton({ productId }: { productId: string }) {
  const { mutate: addToCart, isPending } = useAddToCart();

  return (
    <>
      <button
        className="text-sm font-stretch-50%  md:text-base border-t-neutral-500 font-bold py-2 px-4 rounded-2xl my-1 cursor-pointer bg-slate-200 text-primary "
        onClick={() => addToCart(productId)}
        disabled={isPending}
      >
        {isPending ? "Adding..." : "Add to cart"}
      </button>
    </>
  );
}
