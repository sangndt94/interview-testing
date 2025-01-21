import React, { useContext } from "react";
import { AppContext } from "../../context";

const Bloc5 = () => {
  const { language, changeLanguage, changeDataLanguage, dataLanguage } =
    useContext(AppContext);
  return (
    <div className="bg-gradient-to-b from-white to-teal-100 py-16 px-4 lg:px-20" >
      {/* Header */}
      <div className="flex gap-8 items-center flex-col-reverse xl:flex-row flex-wrap xl:flex-nowrap">
        {/* Left Content */}
        <div>
          <p className="text-gray-600 leading-relaxed">
            {dataLanguage?.[0]?.bloc_5?.text}
          </p>
        </div>
        {/* Right Content */}
        <div className="text-right">
          <h1 className="text-3xl lg:text-4xl font-bold ">
            {dataLanguage?.[0]?.bloc_5?.title}{" "}
            <span className="text-red-500">#BASIC</span>
          </h1>
        </div>
      </div>

      {/* Featured Section */}
      <div className="mt-16 flex flex-col items-center">
        <div className="relative w-full lg:w-3/5">
          <img
            src="image/bloc5(2).png"
            alt="Featured"
            className="rounded-lg shadow-lg w-full h-96 xl:h-full"
          />
          <div className="absolute  bg-white p-4 rounded-lg shadow-md -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[90%] xl:h-[90%]">
            <img
              src="image/bloc5(1).png"
              alt="Featured"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="flex justify-between items-center mt-3 ">
              <div>
                <h3 className="text-lg font-bold">La famille</h3>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <p className="text-sm font-bold inline-block">24 Sep 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="mt-16 flex justify-between flex-wrap xl:flex-nowrap xl:max-w-full gap-10 xl:px-0 px-9">
        {dataLanguage?.[0]?.bloc_5?.reviews?.map((item, index) => {
          const src = `/image/bloc5(${index + 3}).png`;
          return (
            <div className="relative">
              <img
                src={src}
                alt="Avocado"
                className="rounded-lg shadow-md w-full"
              />
              <div className="absolute bottom-0 left-0 bg-gray-900 bg-opacity-50 text-white text-sm p-1  w-full rounded-lg">
                <p>@{item?.author}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-600">
        {dataLanguage?.[0]?.bloc_5?.footer}
      </div>
    </div>
  );
};

export default Bloc5;
