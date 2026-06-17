import { Link } from "react-router-dom";
import type { Product } from "../../types/types";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import AddToWishlistButton from "../AddToWishlistButton/AddToWishlistButton";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* product image */}
      <Link to={`/prouductDetails/${product._id}`}>
        <img
          className="p-2 rounded-lg border-0  object-cover h-64 w-full"
          src={product.imageCover}
          alt={product.title}
        />
      </Link>

      <div className="px-5 pb-5">
        {/* Title */}
        <Link to="#">
          <h5 className="text-xl font-stretch-50%  font-semibold tracking-tight text-gray-900 ">
            {product.title || "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"}
          </h5>
        </Link>

        {/* rating section */}
        <div className="flex items-center mt-2.5 mb-5">
          {/* <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(4)].map((_, i) => (
              // <svg
              //   key={i}
              //   className="w-4 h-4 text-yellow-300"
              //   aria-hidden="true"
              //   xmlns="http://www.w3.org/2000/svg"
              //   fill="currentColor"
              //   viewBox="0 0 22 20"
              // >
              //   <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              // </svg>
            ))}
            <svg
              className="w-4 h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div> */}
        </div>
        <div className="flex justify-between ">
          <span className=" text-xl md:text-3xl font-bold font-stretch-50% ">
            {product.price} EGP
          </span>
          <span>
            <i className="fas fa-star"></i>
            {product.ratingsAverage}
          </span>
        </div>
        {/* price and action */}
        <div className="flex my-2 items-center gap-1 md:justify-between">
          <AddToCartButton productId={product._id} />
          <AddToWishlistButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
