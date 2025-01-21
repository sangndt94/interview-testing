import React from "react";
import "./BannerComponent.css";
export default function BannerComponent() {
  return (
    <div className="image-container">
      <img
        src="/image/Hero image.png"
        alt="Example"
        width={"100%"}
        className="lg:h-full xs:h-screen banner_main"
      />
      <div className="icons-container lg:pb-24 !flex justify-evenly">
        <div className="icon">
          <img src="/icon/1.png" alt="Mountain" />
        </div>
        <div className="icon">
          <img src="/icon/2.png" alt="Fish" />
        </div>
        <div className="icon">
          <img src="/icon/6.png" alt="Target" />
        </div>
      </div>

      <div className="fixed right-10 bottom-4 z-10">
        <img src="/icon/mess.png" alt="Target" />
      </div>
    </div>
  );
}
