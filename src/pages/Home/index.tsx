import CategoriesSlider from "../../components/CategoriesSlider/CategoriesSlider";
import Products from "../Products";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 mt-1">
      <h2 className="font-bold text-primary-dark text-lg md:text-5xl">FreshCArt</h2>
      <CategoriesSlider />
      <Products />
    </div>
  );
}
