import ProductCard from "../../components/ProductCard/ProductCard";
import useProducts from "../../hooks/useProducts";
export default function Products() {
  const { data: products } = useProducts();

  return (
    <div>
      <title>All Products</title>
      <meta name="description" content="products woman shall electronics shoes t-shirts" />

      <div className="mx-auto grid w-full grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products && products.length > 0 ? (
          products.map((product) => <ProductCard product={product} key={product._id} />)
        ) : (
          <h3 className="col-span-full text-center text-gray-500">No products found</h3>
        )}
      </div>
    </div>
  );
}
