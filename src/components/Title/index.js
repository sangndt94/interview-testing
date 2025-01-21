import React from "react";
import "./Title.css";
export default function Title({ title, subtitle }) {
  return (
    <div>
      <div class="section-title">
        <div class="line"></div>
        <h2 className="xl:text-5xl xs:text-lg text-center ">{title}</h2>
        <div class="line"></div>
      </div>
      {subtitle ? <h4 className="block text-center">{subtitle}</h4> : ""}
    </div>
  );
}
