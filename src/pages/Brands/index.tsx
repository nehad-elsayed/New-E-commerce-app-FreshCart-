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
            
            <div key={brand._id} className="shadow-lg shadow-primary-dark/10 group overflow-hidden rounded-lg">
              <img
                className="mx-auto rounded-lg transition-transform duration-300 group-hover:scale-125 cursor-pointer"
                src={brand.image}
                alt={brand.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
