import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import CSS của Swiper
import "swiper/css/navigation"; // Import CSS cho Navigation
import { Navigation } from "swiper/modules"; // Import Navigation nếu Swiper là v8+
import Title from "../../components/Title";
import { AppContext } from "../../context";

const Bloc3 = () => {
  const { language, changeLanguage, changeDataLanguage, dataLanguage } =
    useContext(AppContext);
  const slides = [
    {
      img: "https://via.placeholder.com/300x200",
      title: "Case title",
      subtitle: "Case sous-titre",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
    },
    {
      img: "https://via.placeholder.com/300x200",
      title: "Case title",
      subtitle: "Case sous-titre",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
    },
    {
      img: "https://via.placeholder.com/300x200",
      title: "Case title",
      subtitle: "Case sous-titre",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
    },
    {
      img: "https://via.placeholder.com/300x200",
      title: "Case title",
      subtitle: "Case sous-titre",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
    },
  ];

  return (
    <div>
      <div className="flex justify-end">
        <div className="w-full xl:w-[75%] pr-8">
          {/* Tiêu đề chính */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-orange-600 text-2xl font-bold">{dataLanguage?.[0]?.bloc_3?.title}</h2>
            <button className="text-gray-500 text-sm font-medium hover:text-orange-600">
              {dataLanguage?.[0]?.bloc_3?.more_info}
            </button>
          </div>

          {/* Carousel */}
          <Swiper
            modules={[Navigation]} // Thêm Navigation vào Swiper
            navigation
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {dataLanguage?.[0]?.bloc_3?.cases?.map((slide, index) => {
              const src = `/image/image (${index + 4}).png`;
              return (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={src}
                      alt={slide.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-orange-600 text-sm font-semibold">
                        {slide.tagline}
                      </p>
                      <h3 className="text-gray-800 text-lg font-bold mt-2">
                        {slide.category}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Bloc3;
