import React from "react";
import photo from "../Images/airbnb-grid.png";

export default function Hero() {
  return (
    <main>
      <img
        src={photo}
        alt="Grid"
        className="absolute top-[96px] left-[77px] flex align-middle"
      />
      <h1
        className="absolute top-[660px] left-[36px]
                    font-bold text-4xl"
      >
        Online Experiences
      </h1>
      <p className="absolute top-[716px] left-[36px] font-light">
        Join unique interactive activities led by
        <span className="block">
          one-of-a-kind hosts—all without leaving
        </span>{" "}
        home.
      </p>
    </main>
  );
}
