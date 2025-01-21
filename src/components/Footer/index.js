import React, { useContext } from "react";
import { AppContext } from "../../context";

const Footer = () => {
  const { dataLanguage } = useContext(AppContext);
  return (
    <footer className="bg-red-900 text-white ">
      <div className="text-center relative">
        <img src="/image/footer.png" alt="Icon 1" width="100%" className="object-cover h-96 xl:h-auto"/>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className=" text-5xl text-red-950">
            {dataLanguage?.[0]?.bloc_6?.title}
          </h1>
          <h3 className="text-black text-4xl">
            {dataLanguage?.[0]?.bloc_6?.subtitle}
          </h3>
          <div className="text-black">{dataLanguage?.[0]?.bloc_6?.text}</div>
          <div className="form-actions !justify-center">
            <button type="submit" className="submit-button !bg-red-500">
              {dataLanguage?.[0]?.bloc_6?.button}
            </button>
          </div>
        </div>
      </div>
      <div className=" px-12 mt-20">
        {/* Cột giữa */}
        <div className="xl:flex text-center xl:text-left justify-between pb-5 ">
          <div className="mt-7">
            <h3 className="font-bold text-lg mb-4">
              {dataLanguage?.[0]?.footer?.address?.name}
            </h3>
            <p>{dataLanguage?.[0]?.footer?.address?.phone}</p>
            <p>{dataLanguage?.[0]?.footer?.address?.location}</p>
          </div>
          <div className="mt-7">
            <h4 className="font-bold mb-2">Activités</h4>
            <ul className="space-y-2">
              <li>Activité 1</li>
              <li>Activité 2</li>
              <li>Activité 3</li>
            </ul>
          </div>
          <div className="mt-7">
            <h4 className="font-bold mb-2">Titres</h4>
            <ul className="space-y-2">
              <li>Titre 1</li>
              <li>Titre 2</li>
              <li>Titre 3</li>
            </ul>
          </div>
          {/* Cột phải */}
          <div className="mt-7">
            <h4 className="font-bold mb-2">Blog</h4>
            <p className="mb-4">Nous contacter</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 flex justify-between items-center">
          <p className="text-sm">&copy; BASIC 2024</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-75">
              <img
                src="/image/Footer social media icon.svg"
                alt="Facebook"
                width="20"
              />
            </a>
            <a href="#" className="hover:opacity-75">
              <img
                src="/image/Footer social media icon (1).svg"
                alt="Instagram"
                width="20"
              />
            </a>
            <a href="#" className="hover:opacity-75">
              <img
                src="/image/Footer social media icon (2).svg"
                alt="Instagram"
                width="20"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
