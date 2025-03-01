"use client";
import { CirclePlus, MinusCircle } from "lucide-react";
import React, { useState } from "react";
const Faq = ({ item }) => {
  const [state, setSate] = useState(false);

  return (
    <div className="flex flex-col w-full gap-8 duration-200">
      <div className="flex flex-row justify-between">
        <p className="md:text-2xl text-base leading-[normal] font-semibold">
          {item.q}
        </p>
        {state ? (
          <MinusCircle
            onClick={() => {
              setSate(false);
            }}
            className="md:w-8 md:h-8 w-6 h-6  ml-1 flex-shrink-0"
          />
        ) : (
          <CirclePlus
            onClick={() => {
              setSate(true);
            }}
            className="md:w-8 md:h-8 w-6 h-6 ml-1 flex-shrink-0"
          />
        )}
      </div>
      <div className="w-full h-[2px] bg-[#E3E3E3]" />
      <p
        className={`md:text-2xl text-sm md:leading-10 leading-[28px] text-[#5E6272] ${state ? "inline" : "hidden"} `}
      >
        {item.a}
      </p>
      <div
        className={` ${state ? "inline" : "hidden"} w-full h-[2px] bg-[#E3E3E3]`}
      />
    </div>
  );
};
export default Faq;
