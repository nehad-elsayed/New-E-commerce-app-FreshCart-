import Products from "../Products";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 mt-1">
      <h1 className="text-center text-primary">Fresh Cart</h1>
      <Products />
    </div>
  );
}
