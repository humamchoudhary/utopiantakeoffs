"use client";
import { CirclePlus, MinusCircle } from "lucide-react";
import React, { useState } from "react";
const Faq = ({ item }) => {
  const [state, setSate] = useState(false);

  return (
    <div className="flex flex-col w-full gap-8 duration-200">
      <div className="flex flex-row justify-between">
        <p className="text-2xl leading-[normal] font-semibold">{item.q}</p>
        {state ? (
          <MinusCircle
            onClick={() => {
              setSate(false);
            }}
            className="w-8 h-8"
          />
        ) : (
          <CirclePlus
            onClick={() => {
              setSate(true);
            }}
            className="w-8 h-8"
          />
        )}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={1000}
        height={2}
        fill="none"
      >
        <path stroke="#E3E3E3" d="M0 1h1000" />
      </svg>
      <p
        className={`text-2xl leading-10 text-[#5F6778] ${state ? "inline" : "hidden"} `}
      >
        {item.a}
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={1000}
        height={2}
        fill="none"
        className={`${state ? "block" : "hidden"}`}
      >
        <path stroke="#E3E3E3" d="M0 1h1000" />
      </svg>
    </div>
  );
};
export default Faq;
