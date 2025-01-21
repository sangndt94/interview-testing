import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context";
import "./Header.css";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { changeDataLanguage, dataLanguage } = useContext(AppContext);

  const [currentLang, setCurrentLang] = useState(() => i18n.language || "en");
  const previousLang = useRef(currentLang); // Lưu ngôn ngữ trước đó
  const handleLanguageChange = (lang) => {
    if (lang !== previousLang.current) {
      setCurrentLang(lang);
      previousLang.current = lang; // Cập nhật giá trị ngôn ngữ trước đó
      i18n.changeLanguage(lang);
    }
  };
  // Hàm thay đổi ngôn ngữ

  // Gọi API để lấy dữ liệu ngôn ngữ
  useEffect(() => {
    const fetchLanguageData = async () => {
      try {
        const response = await fetch(
          `https://api.test.soa-dev.net/api/v1/pages?lang=${currentLang}`
        );
        const data = await response.json();
        changeDataLanguage(data); // Lưu dữ liệu API vào state
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchLanguageData();
  }, [currentLang]);

  // Ghi log sự kiện thay đổi ngôn ngữ
  useEffect(() => {
    const handleLanguageEvent = (lng) => {
      console.log("Language changed to:", lng);
    };

    i18n.on("languageChanged", handleLanguageEvent);

    return () => {
      i18n.off("languageChanged", handleLanguageEvent);
    };
  }, [i18n]);
  return (
    <header className="header">
      <nav className="header-nav fixed w-full bg-white shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          {/* Logo */}
          <div href="/" className="flex items-center">
            <span className="text-xl font-semibold text-primary text-white mr-2">
              Logo Sample
            </span>
            <div>
              <select
                onChange={(e) => handleLanguageChange(e.target.value)}
                value={currentLang}
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </div>
          </div>

          {/* Dropdown chọn ngôn ngữ */}

          {/* Navigation Menu */}
          <div id="mobile-menu" className="hidden xl:flex justify-center  py-2">
            <ul className="flex flex-col xl:flex-row xl:space-x-8">
              {dataLanguage?.[0]?.banner_menu.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white hover:text-primary block py-2 lg:py-0"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="xl:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Icons */}
          <div className="hidden xl:flex items-center space-x-4">
            <a href="#" className="header-icon">
              <img src="/icon/1.png" alt="Icon 1" width="20" />
            </a>
            <a href="#" className="header-icon">
              <img src="/icon/2.png" alt="Icon 2" width="20" />
            </a>
            <a href="#" className="header-icon">
              <img src="/icon/6.png" alt="Icon 3" width="20" />
            </a>
            <a href="#" className="header-reserve">
              <img src="/icon/Reservez_button.png" alt="Reserve" width="60" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
