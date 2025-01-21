import React, { useContext } from "react";
import { AppContext } from "../../context";
const Bloc4 = () => {
  const { dataLanguage } = useContext(AppContext);
  return (
    <div>
      <div className=" mt-20 xl:px-56 mb-10 lg:px-2 lg:px-2">
        {/* Header */}
        <div className="flex flex-wrap xl:flex-nowrap lg:space-x-8">
          {/* Text Content */}
          <div className="lg:w-1/2 xl:text-center lg:text-left mb-8 lg:mb-0">
            <div className="ml-5">
              <img
                src="/icon/Mask group.svg"
                alt="Logo"
                className="w-12 h-12"
              />
            </div>
            <h1 className="text-2xl xl:text-4xl font-bold text-orange-500 leading-tight mb-2">
              {dataLanguage?.[0]?.bloc_4?.title}{" "}
              <span className="text-2xl text-gray-700 font-light">
                {dataLanguage?.[0]?.bloc_4?.text_title}
              </span>
            </h1>

            {/* Description */}
            <div className="mt-16 lg:mt-24 flex flex-col lg:flex-row ">
              <div className="lg:text-left flex">
                <hr className="hidden xl:block border-2 w-full mt-3 text-black bg-black" />
                <div className="text-gray-700 leading-relaxed pl-6 text-left">
                  <h2 className="text-2xl font-semibold text-left">
                    {dataLanguage?.[0]?.bloc_4?.subtitle}
                  </h2>
                  {dataLanguage?.[0]?.bloc_4?.text}
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center w-full">
            <img
              src="/image/image (8).png"
              alt="Ice Cream"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 lg:mt-24 gap-8 text-center flex justify-between flex-wrap">
          {/* Feature Item */}
          {dataLanguage?.[0]?.bloc_4?.pictos?.map((item, index) => {
            const src = `/image/bloc4(${index + 1}).png`;
            return (
              <div className="flex flex-col items-center max-w-32">
                <div className="p-6 rounded-full bg-teal-100">
                  <img src={src} alt="Confort" className="w-10 h-10" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{item?.title}</h3>
                <p className="text-sm text-gray-500">{item?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* ----------------------------------------------------------------------------- */}
    </div>
  );
};

export default Bloc4;
