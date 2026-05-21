import useProductDetails from "../../hooks/useProductDetails";

export default function ProductDetails() {
  const { data: productDetails } = useProductDetails();

  console.log(productDetails);

  return (
    <>
      <h2>{productDetails.title}</h2>
      <img src={productDetails.imageCover} />
      <p>{productDetails.quantity}</p>
      <p>{productDetails.sold}</p>
    </>
  );
}
