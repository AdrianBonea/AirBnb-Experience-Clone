import React from "react";
import star from "../Images/star.png";

export default function Cart(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div>
      {badgeText && (
        <div
          className="absolute top-2 ml-2 bg-white rounded-[4px] 
                    w-[49px] h-[18px]  grid place-items-center 
                    text-center text-[9px] font-semibold"
        >
          {badgeText}
        </div>
      )}
      {/*Sold out and Online sign*/}

      <img src={props.coverImg} className="w-[176px] h-auto" />
      {/* Principal photo*/}

      <div className="flex flex-row mt-1">
        <img src={star} className="w-[14px] h-[14px]" />
        <p className="ml-1 text-xs">
          {props.stats.rating} {/* Rating*/}
          <span className="text-[#918E9B]">
            &nbsp;({props.stats.reviewCount}) {/* Number of reviews*/}
            <span className="inline-block align-top text-[6px] ">
              &#9679;{/*Disc*/} &nbsp;
            </span>
            {props.location} {/* Country*/}
          </span>
        </p>
      </div>

      <p className="text-xs">{props.title}</p>
      {/*Title of the activity */}

      <p className="text-xs font-light pb-10">
        <span className="font-bold">From ${props.price}</span>&nbsp;/ person
        {/* Price for the activity*/}
      </p>
    </div>
  );
}
