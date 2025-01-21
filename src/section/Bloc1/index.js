import React, { useContext } from "react";
import Title from "../../components/Title";
import { AppContext } from "../../context";

export default function Section1() {
  const { language, changeLanguage, changeDataLanguage, dataLanguage } =
    useContext(AppContext);
  return (
    <section className="xl:px-56 lg:px-2">
      <Title
        title={dataLanguage?.[0]?.bloc_1?.title}
        subtitle={dataLanguage?.[0]?.bloc_1?.subtitle}
      />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 relative">
        {dataLanguage?.[0]?.bloc_1?.cases?.map((item, index) => {
          const src = `/image/image (${index + 1}).png`;
          return (
            <div
              class={
                index === 1
                  ? "bg-white rounded-lg shadow-lg overflow-hidden relative -top-6"
                  : "bg-white rounded-lg shadow-lg overflow-hidden"
              }
            >
              <img src={src} alt="Card Image 1" class="w-full " />
              <div class="p-4">
                <p class="text-orange-600 text-sm font-semibold">{item.category}</p>
                <h3 class="text-gray-800 text-lg font-bold mt-2">
                  {item.cta}
                </h3>
                <p class="text-gray-600 text-sm mt-2">
                  {item.description}
                </p>
                <button class="mt-4 px-4 py-2 border border-orange-500 text-orange-500 rounded-full text-sm font-medium hover:bg-orange-100 transition duration-300">
                  Forfait 1 <span aria-hidden="true">↗</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
