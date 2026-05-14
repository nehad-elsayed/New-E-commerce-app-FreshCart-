import useBrands from "../../hooks/useBrands";
import type { Brand } from "../../types/types";

export default function Brands() {
  const { data } = useBrands();

  return (
    <div>
      <title>Brands</title>

      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 py-3 px-5">
        {data.map((brand: Brand) => {
          return (
            <div className="border-slate-400 border-dotted border-2">
              <img className="text-center mx-auto" src={brand.image} alt={brand.name}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
