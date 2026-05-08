import ProductCard from "../../components/ProductCard/ProductCard";
import { Bounce, toast } from "react-toastify";
import Loadingscreen from "../../components/LoadingScreen/Loadingscreen";
import useProducts from "../../hooks/useProducts";

export default function Products() {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <Loadingscreen />;
  }

  if (isError) {
    toast.error("There is an error fetching products", {
      position: "bottom-right",
      transition: Bounce,
    });
    return <h3 className="text-center text-red-500">Error loading products</h3>;
  }

  return (
    <div>
      <h2 className="text-center md:text-2xl my-5 font-bold">All Products</h2>
      <div className="container p-5 w-fit mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products && products.length > 0 ? (
          products.map((product) => <ProductCard product={product} key={product._id} />)
        ) : (
          <h3 className="col-span-full text-center">No products found</h3>
        )}
      </div>
    </div>
  );
}
