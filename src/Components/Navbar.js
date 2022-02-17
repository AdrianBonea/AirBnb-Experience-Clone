import React from "react";
import logo from "../Images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="absolute top-0 left-0 w-full h-[70px] shadow-lg">
        <img
          src={logo}
          alt="AirBnB Logo"
          className="absolute left-[30px] top-[22px]"
        />
      </div>
    </nav>
  );
}
