import React from "react";

const WrittenReviewTile = ({ name, stars, post, review, image }) => {
  return (
    <div className="px-6 py-5 rounded-[20px] flex flex-col bg-[#1F212A]  gap-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-12 h-12 rounded-full bg-fg"></div>
          <div className="flex flex-col">
            <p className="text-xl font-bold text-[#FAFAFB] leading-6">
              {name}
            </p>
            <p className="text-xs font-bold text-[#AC554D] leading-[normal]">
              {post}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <p className="text-base font-semibold leading-[normal] ">
            {stars.toFixed(1)}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="none"
          >
            <path
              fill="#F9B619"
              d="M8.361 2.726a1.798 1.798 0 0 1 3.279 0l1.159 2.441c.266.561.78.95 1.376 1.04l2.591.391c1.5.227 2.099 2.143 1.014 3.242l-1.876 1.9a1.948 1.948 0 0 0-.525 1.683l.442 2.684c.257 1.552-1.311 2.736-2.652 2.003l-2.318-1.267a1.766 1.766 0 0 0-1.701 0L6.832 18.11c-1.341.733-2.909-.45-2.653-2.003l.443-2.684a1.948 1.948 0 0 0-.526-1.682l-1.875-1.9c-1.085-1.1-.486-3.016 1.013-3.243l2.592-.391a1.835 1.835 0 0 0 1.376-1.04l1.159-2.441Z"
            />
          </svg>
        </div>
      </div>
      <p className="text-base font-medium leading-[22px] text-[#D5D5DB]">{review}</p>
    </div>
  );
};
export default WrittenReviewTile;
