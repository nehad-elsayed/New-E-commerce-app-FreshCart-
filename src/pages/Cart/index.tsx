import { useEffect } from "react";
import useCartProducts from "../../hooks/useCartProducts";

export default function Cart() {
  const { data: cartProducts, refetch } = useCartProducts();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="container mx-auto py-8">
      <title> Cart</title>
      <h2 className="font-bold text-primary-dark text-lg md:text-4xl mb-4">Your Cart  {cartProducts?.numOfCartItems ?? 0}</h2>
      <p className="text-sm text-gray-600">
        {cartProducts?.numOfCartItems ? cartProducts.numOfCartItems : 0} items in cart
      </p>
    </div>
  );
}