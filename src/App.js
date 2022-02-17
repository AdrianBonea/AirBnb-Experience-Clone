import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";

export default function App() {
  const cardInfo = data.map((item) => (
    <Card key={item.id} {...item} />
  )); /*Card info from array/database */

  return (
    <div className="relative font-Poppins">
      <Navbar />
      <Hero />
      <div className="flex flex-row gap-5 absolute top-[850px] left-[36px]">
        {cardInfo}
      </div>
    </div>
  );
}
