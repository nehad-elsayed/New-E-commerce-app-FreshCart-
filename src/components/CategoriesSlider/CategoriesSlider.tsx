import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import useCategories from "../../hooks/useCategories";
import type { Category } from "../../types/types";


export default function CategoriesSlider() {
  const { data: categories } = useCategories();
  return (
    <section className="py-8">
    

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={16}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0:    { slidesPerView: 1 },
          480:  { slidesPerView: 2 },
          768:  { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {categories.map((category: Category) => (
          <SwiperSlide key={category._id}>
            <div className="group cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-125"
                />
              </div>
              <div className="p-3">
                <h3 className="text-center text-sm font-semibold text-primary">
                  {category.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
