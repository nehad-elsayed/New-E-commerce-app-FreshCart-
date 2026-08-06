import { Link } from "react-router-dom";
import { useEffect } from "react";
import useCartProducts from "../../hooks/useCartProducts";
import useUpdateCartQuantity from "../../hooks/useUpdateCartQuantity";
import useRemoveFromCart from "../../hooks/useRemoveFromCart";
import useClearCart from "../../hooks/useClearCart";
import CartItem from "../../components/CartItem/CartItem";
import EmptyCart from "../../components/EmptyCart/EmptyCart";



export default function Cart() {
  const { data: cart, refetch } = useCartProducts();
  const {
    mutate: updateQuantity,
    isPending: isUpdating,
    variables: updateVars,
  } = useUpdateCartQuantity();
  const { mutate: removeItem, isPending: isRemoving, variables: removeId } = useRemoveFromCart();
  const { mutate: clear, isPending: isClearing } = useClearCart();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const items = cart?.data?.products ?? [];
  const itemCount = cart?.numOfCartItems ?? 0;
  const totalPrice = cart?.data?.totalCartPrice ?? 0;
  const isEmpty = items.length === 0;

  return (
    <div className="mx-auto max-w-6xl px-4">
      <title>Cart</title>

      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-primary-dark md:text-4xl">Your Cart</h2>
          <p className="mt-1 text-sm text-gray-500">
            {itemCount === 0
              ? "No items yet"
              : `${itemCount} ${itemCount === 1 ? "item" : "items"} in your cart`}
          </p>
        </div>
        {!isEmpty && (
          <button
            type="button"
            disabled={isClearing}
            onClick={() => clear()}
            className="text-sm cursor-pointer font-medium text-red-500 transition hover:text-red-600 disabled:opacity-50"
          >
            {isClearing ? "Clearing..." : "Clear cart"}
          </button>
        )}
      </div>

      {isEmpty ? (
        <EmptyCart />
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          <section className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6 lg:col-span-2">
            {items.map((item) => {
              const productId = item.product._id || item.product.id;
              return (
                <CartItem
                  key={item._id}
                  item={item}
                  isUpdating={isUpdating && updateVars?.productId === productId}
                  isRemoving={isRemoving && removeId === productId}
                  onUpdate={(id, count) => updateQuantity({ productId: id, count })}
                  onRemove={(id) => removeItem(id)}
                />
              );
            })}
          </section>

          <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <h3 className="text-lg font-semibold text-gray-900">Order Summary</h3>

            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex items-center justify-between text-gray-600">
                <dt>Subtotal ({itemCount} items)</dt>
                <dd className="font-medium text-gray-900">{totalPrice.toLocaleString()} EGP</dd>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <dt>Shipping</dt>
                <dd className="font-medium text-primary">Free</dd>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-semibold text-gray-900">Total</dt>
                  <dd className="text-xl font-bold text-primary-dark">
                    {totalPrice.toLocaleString()} EGP
                  </dd>
                </div>
              </div>
            </dl>

            <Link
              to={`/address/${cart?.cartId || cart?.data?._id}`}
              className="mt-6 block w-full rounded-xl bg-primary py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/products"
              className="mt-3 block w-full rounded-xl border border-gray-200 py-3 text-center text-sm font-medium text-gray-700 transition hover:border-primary hover:text-primary"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
