import useCategories from "../../hooks/useCategories";
import type { Category } from "../../types/types";

export default function Categories() {
  const { data } = useCategories();

  return (
    <div>
      <title>Categories</title>
      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((category: Category) => (
          <div
            key={category._id}
            className="p-3 bg-slate-200 rounded-lg flex flex-col justify-between"
          >
            <img className="rounded-lg min-h-[90%]" src={category.image} alt={category.name} />
            <h2 className="p-1 animate__animated animate__bounceInDown text-lg font-bold bg-white dark:bg-sky-900 text-black dark:text-slate-100 rounded-md">
              {category.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
