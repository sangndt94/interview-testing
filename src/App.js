import React, { useState, useEffect, useRef, useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "./App.css";
import "./i18n";
import { Header } from "./components/Header";
import { AppContext } from "./context";
import Bloc1 from "./section/Bloc1";
import Bloc3 from "./section/Bloc3";
import BannerComponent from "./section/BannerComponent";
import Bloc2 from "./section/Bloc2";
import Bloc4 from "./section/Bloc4";
import Bloc5 from "./section/Bloc5";
import Footer from "./components/Footer";

const App = () => {
  const { t, i18n } = useTranslation();
  const { language, changeLanguage, changeDataLanguage, dataLanguage } =
    useContext(AppContext);
  console.log(dataLanguage);

  // Khởi tạo ngôn ngữ mặc định là "en"

  return (
    <div className="app">
      {/* Header */}
      <Header />
      <BannerComponent />
      <Bloc1 />

      <Bloc2 />

      <Bloc3 />

      <Bloc4 />

      <Bloc5 />
      {/* Hiển thị dữ liệu từ API */}
      {/* <div>
        <h2>{t("API Data")}</h2>
        {dataLanguage ? (
          <pre>{JSON.stringify(dataLanguage, null, 2)}</pre>
        ) : (
          <p>{t("Loading data...")}</p>
        )}
      </div> */}

      {/* Calendar */}

      {/* Map Section */}
      <section className="bloc-2">
        <h2>{t("Bloc 2")}</h2>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>{t("A sample location")}</Popup>
          </Marker>
        </MapContainer>
      </section>

      <Footer />
    </div>
  );
};

export default App;
