import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Tải dữ liệu từ API
  .use(LanguageDetector) // Dùng để phát hiện ngôn ngữ
  .use(initReactI18next) // React binding
  .init({
    supportedLngs: ["en", "fr"], // Ngôn ngữ được hỗ trợ
    fallbackLng: "en", // Ngôn ngữ mặc định
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"], // Thứ tự phát hiện
      caches: ["cookie"], // Lưu ngôn ngữ vào cookie
    },
    backend: {
      loadPath: "https://api.test.soa-dev.net/api/v1/pages?lang={{lng}}", // API endpoint
      parse: (data) => data.data, // Tùy chỉnh parse dữ liệu
    },
    react: { useSuspense: false }, // Tắt chế độ chờ của React
  });

export default i18n;
