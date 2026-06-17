import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";
import AddToWishlistButton from "../../components/AddToWishlistButton/AddToWishlistButton";
import useProductDetails from "../../hooks/useProductDetails";
import { Link } from "react-router-dom";
export default function ProductDetails() {
  const { data: productDetails } = useProductDetails();
  console.log(productDetails);

  return (
    <>
      <div className="container mx-auto w-1/2 min-h-screen">
        <Link
          to="#"
          className="flex flex-col items-center bg-neutral-primary-soft p-6  rounded-lg shadow-lg md:flex-row  md:max-w-xl"
        >
          <img
            className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0"
            src={productDetails.imageCover}
            alt="product_photo"
          />
          <div className="flex flex-col justify-between md:p-4 leading-normal">
            <h5 className="mb-2 text-xs md:text-xl text-slate-500 font-bold tracking-tight text-heading">
              {productDetails.title}
            </h5>
            <h5 className="mb-2 text-xs md:text-2xl text-primary-dark font-bold tracking-tight text-heading">
              {productDetails.category.name}
            </h5>

            <p className="my-2 text text-center md:text-start">{productDetails.description}</p>
            <div className="flex flex-wrap justify-between ">
              <AddToCartButton productId={productDetails._id} />
              <AddToWishlistButton />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
