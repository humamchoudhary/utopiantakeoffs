"use client";

import React, { useState } from "react";
import ContactFileUpload from "@/components/ContactFileUpload";
const ContactPage = () => {
  const [files, setFiles] = useState([]);

  return (
    <main className="min-h-screen flex flex-col items-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={572}
        height={572}
        fill="none"
        className="absolute top-[260px] left-[434px] right-[434px] z-0"
      >
        <path
          fill="url(#a)"
          fillRule="evenodd"
          d="M546.26 0h-5.72v25.74h-51.48V0h-5.72v25.74h-51.48V0h-5.72v25.74h-51.48V0h-5.72v25.74h-51.48V0h-5.72v25.74h-51.48V0h-5.72v25.74h-51.48V0h-5.72v25.74h-51.48V0h-5.72v25.74H88.66V0h-5.72v25.74H31.46V0h-5.72v25.74H0v5.72h25.74v51.48H0v5.72h25.74v51.48H0v5.72h25.74v51.48H0v5.72h25.74v51.48H0v5.72h25.74v51.48H0v5.72h25.74v51.48H0v5.72h25.74v51.48H0v5.72h25.74v51.48H0v5.72h25.74v51.48H0v5.72h25.74V572h5.72v-25.74h51.48V572h5.72v-25.74h51.48V572h5.72v-25.74h51.48V572h5.72v-25.74h51.48V572h5.72v-25.74h51.48V572h5.72v-25.74h51.48V572h5.72v-25.74h51.48V572h5.72v-25.74h51.48V572h5.72v-25.74h51.48V572h5.72v-25.74H572v-5.72h-25.74v-51.48H572v-5.72h-25.74v-51.48H572v-5.72h-25.74v-51.48H572v-5.72h-25.74v-51.48H572v-5.72h-25.74v-51.48H572v-5.72h-25.74v-51.48H572v-5.72h-25.74v-51.48H572v-5.72h-25.74V88.66H572v-5.72h-25.74V31.46H572v-5.72h-25.74V0Zm-57.2 82.94h51.48V31.46h-51.48v51.48Zm0 57.2h51.48V88.66h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48ZM82.94 489.06H31.46v51.48h51.48v-51.48Zm0-57.2H31.46v51.48h51.48v-51.48Zm0-57.2H31.46v51.48h51.48v-51.48Zm0-57.2H31.46v51.48h51.48v-51.48Zm0-57.2H31.46v51.48h51.48v-51.48Zm0-57.2H31.46v51.48h51.48v-51.48Zm0-57.2H31.46v51.48h51.48v-51.48Zm0-57.2H31.46v51.48h51.48V88.66Zm0-57.2H31.46v51.48h51.48V31.46Zm348.92 51.48h51.48V31.46h-51.48v51.48Zm0 57.2h51.48V88.66h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm-291.72-51.48H88.66v51.48h51.48v-51.48Zm0-57.2H88.66v51.48h51.48v-51.48Zm0-57.2H88.66v51.48h51.48v-51.48Zm0-57.2H88.66v51.48h51.48v-51.48Zm0-57.2H88.66v51.48h51.48v-51.48Zm0-57.2H88.66v51.48h51.48v-51.48Zm0-57.2H88.66v51.48h51.48V88.66Zm234.52 51.48h51.48V88.66h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm-177.32-51.48h-51.48v51.48h51.48v-51.48Zm0-57.2h-51.48v51.48h51.48v-51.48Zm0-57.2h-51.48v51.48h51.48v-51.48Zm0-57.2h-51.48v51.48h51.48v-51.48Zm0-57.2h-51.48v51.48h51.48v-51.48Zm120.12 51.48h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm-62.92-51.48h-51.48v51.48h51.48v-51.48Zm0-57.2h-51.48v51.48h51.48v-51.48Zm0-57.2h-51.48v51.48h51.48v-51.48Zm5.72 51.48h51.48v-51.48h-51.48v51.48Zm0 57.2h51.48v-51.48h-51.48v51.48Zm51.48 5.72h-51.48v51.48h51.48v-51.48Zm-51.48-120.12h51.48v-51.48h-51.48v51.48Zm-57.2 0h51.48v-51.48h-51.48v51.48Zm51.48 177.32h-51.48v51.48h51.48v-51.48Zm57.2 0h-51.48v51.48h51.48v-51.48Zm57.2 0h-51.48v51.48h51.48v-51.48Zm-51.48-234.52h51.48V88.66h-51.48v51.48Zm-57.2 0h51.48V88.66h-51.48v51.48Zm-57.2 0h51.48V88.66h-51.48v51.48Zm-57.2 0h51.48V88.66h-51.48v51.48Zm51.48 291.72h-51.48v51.48h51.48v-51.48Zm57.2 0h-51.48v51.48h51.48v-51.48Zm57.2 0h-51.48v51.48h51.48v-51.48Zm57.2 0h-51.48v51.48h51.48v-51.48Zm57.2 0h-51.48v51.48h51.48v-51.48ZM374.66 82.94h51.48V31.46h-51.48v51.48Zm-57.2 0h51.48V31.46h-51.48v51.48Zm-57.2 0h51.48V31.46h-51.48v51.48Zm-57.2 0h51.48V31.46h-51.48v51.48Zm-57.2 0h51.48V31.46h-51.48v51.48Zm-57.2 0h51.48V31.46H88.66v51.48Zm51.48 406.12H88.66v51.48h51.48v-51.48Zm57.2 0h-51.48v51.48h51.48v-51.48Zm57.2 0h-51.48v51.48h51.48v-51.48Zm57.2 0h-51.48v51.48h51.48v-51.48Zm57.2 0h-51.48v51.48h51.48v-51.48Zm57.2 0h-51.48v51.48h51.48v-51.48Zm57.2 0h-51.48v51.48h51.48v-51.48Z"
          clipRule="evenodd"
          opacity={0.1}
        />
        <defs>
          <radialGradient
            id="a"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(90 0 286) scale(286)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F99" />
            <stop offset={0.72} stopColor="#fff" />
          </radialGradient>
        </defs>
      </svg>{" "}
      <div className="mt-[243px] flex flex-col items-center justify-center gap-6 w-min px-14 z-10">
        <div className="px-5 py-3 text-primary text-lg font-semibold leading-[normal] border border-primary rounded-xl bg-[#FAF3F2] text-nowrap">
          Affordable Estimate 30% Off
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-7xl font-bold leading-[normal] text-fg text-nowrap">
            Contact Our Friendly Team
          </h1>
          <p className="mt-3 text-center w-[800px]">
            Our expert team is here to assist you with all your construction
            estimating needs. Reach out for inquiries, quotes, or support—let's
            work together!
          </p>
        </div>
        <div className="px-6 py-3 rounded-xl bg-primary text-bg flex flex-row items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            fill="none"
          >
            <path
              stroke="#fff"
              strokeWidth={1.5}
              d="M1.833 7.333A3.667 3.667 0 0 1 5.5 3.667h6.417a3.667 3.667 0 0 1 3.667 3.666v7.334a3.667 3.667 0 0 1-3.667 3.666H5.5a3.667 3.667 0 0 1-3.667-3.666V7.333Z"
            />
            <path
              stroke="#fff"
              strokeWidth={1.5}
              d="m15.584 8.556 1.412-1.507c1.137-1.213 3.17-.408 3.17 1.254v5.394c0 1.662-2.033 2.467-3.17 1.254l-1.412-1.507V8.556ZM11.917 9.167a1.833 1.833 0 1 1-3.667 0 1.833 1.833 0 0 1 3.667 0Z"
            />
          </svg>
          Book a call
        </div>
      </div>
      <div className="flex flex-row gap-10 mt-32 px-14 rounded-lg ">
        <form className="flex flex-col w-1/2 gap-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-fg text-[16px] mb-[13px]"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="px-4 py-[14px] block w-full rounded-lg border-[#C6C6C6] border shadow-sm "
                placeholder="First Name"
              />
            </div>

            <div className="">
              <label
                htmlFor="lastname"
                className="block text-sm font-semibold text-fg text-[16px] mb-[13px]"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="px-4 py-[14px] block w-full rounded-lg border-[#C6C6C6] border shadow-sm "
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="companyName"
              className="block text-sm font-semibold text-fg text-[16px] mb-[13px]"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="px-4 py-[14px] block w-full rounded-lg border-[#C6C6C6] border shadow-sm "
              placeholder="Company Name"
            />
          </div>
          <div className="">
            <label
              htmlFor="companyEmail"
              className="block text-sm font-semibold text-fg text-[16px] mb-[13px]"
            >
              Company Email
            </label>
            <input
              type="email"
              id="companyEmail"
              name="companyEmail"
              className="px-4 py-[14px] block w-full rounded-lg border-[#C6C6C6] border shadow-sm "
              placeholder="you@company.com"
            />
          </div>

          <ContactFileUpload files={files} setFiles={setFiles} />
          <div className="">
            <label
              htmlFor="phoneNo"
              className="block text-sm font-semibold text-fg text-[16px] mb-[13px]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="companyEmail"
              name="companyEmail"
              className="px-4 py-[14px] block w-full rounded-lg border-[#C6C6C6] border shadow-sm "
              placeholder="XXX XXXXXXX"
            />
          </div>
          <div>
            <label
              htmlFor="projectDescription"
              className="block text-sm font-semibold text-fg text-[16px] mb-[13px]"
            >
              Project Description
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              rows="3"
              className="px-4 py-[14px] block w-full rounded-lg border-[#C6C6C6] border shadow-sm "
              placeholder="Leave the project description here"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full h-14 py-3 px-4 justify-center items-center gap-2 rounded-xl bg-primary text-bg text-lg font-semibold leading-[normal] "
            >
              Submit
            </button>
          </div>
        </form>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={2}
          height={940}
          fill="none"
        >
          <path stroke="#EBEBEB" strokeLinecap="round" d="M1 1v938.013" />
        </svg>
        <div className="mt-8 gap-[40px] w-1/2">
          <div className="space-y-14">
            <div>
              <h2 className="text-[24px] font-bold leading-[24px] mb-[10px]">
                Address
              </h2>
              <p className="text-[20px] mb-6 text-[#475464]">
                Your trusted estimating partner with a global presence.
              </p>
              <p className="flex flex-row items-center gap-[14px] text-[20px] font-semibold underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="none"
                >
                  <path
                    stroke="#28303F"
                    strokeWidth={2.5}
                    d="M16.666 11a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0Z"
                  />
                  <path
                    stroke="#28303F"
                    strokeWidth={2.5}
                    d="M23.333 10.81c0 3.046-2.264 6.853-4.743 9.394C16.959 21.876 15.234 23 14 23c-1.235 0-2.959-1.124-4.59-2.796-2.48-2.541-4.744-6.348-4.744-9.394 0-5.05 4.18-9.143 9.334-9.143s9.333 4.093 9.333 9.143Z"
                  />
                  <path
                    stroke="#28303F"
                    strokeLinecap="round"
                    strokeWidth={2.5}
                    d="M18.206 20.586c4.553.568 7.794 2.032 7.794 3.747 0 2.21-5.373 4-12 4s-12-1.79-12-4c0-1.715 3.241-3.18 7.794-3.747"
                  />
                </svg>
                7901 4th St N # 22518 St. Petersburg, FL 33702
              </p>
            </div>

            <div>
              <h2 className=" text-[24px] font-semibold mb-[10px]">
                Contact Info
              </h2>
              <p className="text-[20px] mb-6 text-[#475464]">
                Fast, reliable estimating services worldwide.
              </p>
              <p className="flex flex-row items-center font-semibold gap-[14px] text-[20px] mb-[14px] underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="none"
                >
                  <path
                    stroke="#28303F"
                    strokeLinecap="round"
                    strokeWidth={2.5}
                    d="M2.667 16V9.333A5.333 5.333 0 0 1 8 4h16a5.333 5.333 0 0 1 5.333 5.333v13.334A5.333 5.333 0 0 1 24 28H10.666M8 10.667l5.041 3.36a5.333 5.333 0 0 0 5.917 0L24 10.668M2.666 20h8m-8 4h8"
                  />
                </svg>
                utopiantakeoffs10@gmail.com
              </p>
              <p className="flex flex-row items-center font-semibold gap-[14px] text-[20px] underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="none"
                >
                  <path
                    stroke="#13151B"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M28 25.333V23.14c0-1.09-.664-2.071-1.676-2.476l-2.713-1.085a2.667 2.667 0 0 0-3.375 1.283l-.236.472s-3.333-.666-6-3.333c-2.667-2.667-3.333-6-3.333-6l.472-.236a2.667 2.667 0 0 0 1.283-3.376l-1.085-2.712A2.667 2.667 0 0 0 8.861 4H6.667A2.667 2.667 0 0 0 4 6.667C4 18.449 13.551 28 25.333 28A2.667 2.667 0 0 0 28 25.333Z"
                  />
                </svg>
                +1 914 407 3061
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold mb-[10px]">
                Working Hours
              </h2>
              <p className="text-[20px] text-[#475464] mb-6">
                Available Mon to Sat for your estimating needs.
              </p>
              <p className="flex flex-row items-center gap-[14px] text-[20px] mb-[14px] font-semibold underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="none"
                >
                  <path
                    stroke="#28303F"
                    strokeWidth={2.5}
                    d="M4 8.667a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16.666a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8.667Z"
                  />
                  <path
                    stroke="#28303F"
                    strokeLinecap="round"
                    strokeWidth={2.5}
                    d="M4 12h24"
                  />
                  <path
                    stroke="#28303F"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M10.666 2.667v4M21.334 2.667v4"
                  />
                  <circle cx={16} cy={20} r={1.333} fill="#28303F" />
                  <circle cx={21.333} cy={20} r={1.333} fill="#28303F" />
                  <circle cx={10.667} cy={20} r={1.333} fill="#28303F" />
                </svg>
                Monday to Saturday
              </p>
              <p className="flex flex-row items-center gap-[14px] text-[20px] mb-[14px] font-semibold underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="none"
                >
                  <path
                    stroke="#28303F"
                    strokeLinecap="round"
                    strokeWidth={2.5}
                    d="M29.333 16V6.667a4 4 0 0 0-4-4H6.667a4 4 0 0 0-4 4v18.666a4 4 0 0 0 4 4H12"
                  />
                  <path
                    stroke="#28303F"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M16 9.333V16l-4 1.333M16 24.667v-1.334a2 2 0 0 1 2-2h1.333a2 2 0 0 1 2 2v1a2 2 0 0 1-.8 1.6L16 29.333h5.333M24 21.333v2a2 2 0 0 0 2 2h3.333m0 0v-4m0 4v4M29.333 16l-2.666-2.667"
                  />
                </svg>
                9am to 5pm EST
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold mb-6">
                Get a Quick Quote
              </h2>
              <p className="text-[20px] text-[#475464] leading-10">
                Connect with us today by submitting your information in the
                contact form to receive a quick quote, including an invoice and
                turnaround time, in just 5 minutes. If you have any additional
                queries, our representative will contact you within a day to
                discuss how we can collaborate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="flex flex-row justify-center items-center font-bold mt-14 mb-16 text-[32px]">
          Other Ways To Get In Touch
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-4 ">
          <div className="bg-bg border border-[#E7E7E9] p-6 rounded-xl">
            <div className="p-3 bg-bg rounded-xl border border-[#E7E7E9] w-min">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="none"
              >
                <path
                  stroke="#13151B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="m25.333 9.333 1.724-1.724c.52-.52.52-1.364 0-1.885L25.333 4M20 9.333l1.724-1.724c.52-.52.52-1.364 0-1.885L20 4m-2.667 2.667h4M28 23.139v2.194A2.667 2.667 0 0 1 25.333 28C13.551 28 4 18.449 4 6.667A2.667 2.667 0 0 1 6.667 4H8.86c1.09 0 2.071.664 2.476 1.676l1.085 2.712a2.667 2.667 0 0 1-1.283 3.376l-.472.236s.666 3.333 3.333 6c2.667 2.667 6 3.333 6 3.333l.236-.472a2.667 2.667 0 0 1 3.375-1.283l2.713 1.085A2.667 2.667 0 0 1 28 23.139Z"
                />
              </svg>
            </div>
            <h2 className="mt-6 font-semibold ">Call</h2>
            <p className="text-base text-[#475464] mt-3">
              You can directly call us at{" "}
            </p>
            <p className="text-base font-semibold ">+1 (347) 480-1903</p>
            <p className="text-base text-[#475464]">
              to discuss your project specifications.
            </p>
          </div>
          <div className=" bg-bg border border-[#E7E7E9] p-6 rounded-xl">
            <div className="p-3 bg-bg rounded-xl border border-[#E7E7E9] w-min">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width={33}
                height={32}
                fill="none"
              >
                <path
                  stroke="#13151B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="m27.333 2.667 1.724 1.724c.52.52.52 1.365 0 1.885L27.333 8M22 5.334h6.666m-20 12 2.934 2.2a4 4 0 0 0 4.8 0l2.933-2.2m-12 12h13.333a4 4 0 0 0 4-4V14.667a4 4 0 0 0-4-4H7.333a4 4 0 0 0-4 4v10.667a4 4 0 0 0 4 4Z"
                />
              </svg>
            </div>{" "}
            <h2 className="mt-6 font-semibold">Email</h2>
            <p className="text-base text-[#475464] mt-3">
              You can directly send your plan to us on the given email:{" "}
            </p>
            <p className="text-base font-semibold">
              utopiantakeoffs10@gmail.com
            </p>
          </div>
          <div className="bg-bg border border-[#E7E7E9] p-6 rounded-xl">
            <div className="p-3 bg-bg rounded-xl border border-[#E7E7E9] w-min">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width={33}
                height={32}
                fill="none"
              >
                <path
                  stroke="#28303F"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M23.497 10.897c3.634 1.632 6.17 5.318 6.17 9.603V25c0 1.657-1.327 3-2.963 3h-8.89c-3.87 0-7.162-2.504-8.382-6m14.065-11.103C22.56 6.941 19.046 4 14.852 4H13.37C7.643 4 3 8.701 3 14.5V19c0 1.657 1.327 3 2.963 3h3.469m14.065-11.103c.16.675.244 1.379.244 2.103 0 4.97-3.98 9-8.89 9h-5.42"
                />
              </svg>
            </div>
            <h2 className="mt-6 font-semibold ">Live Chat</h2>
            <p className="text-base text-[#475464] mt-3">
              24/7 live chat support for instant assistance during critical
              times.{" "}
            </p>
          </div>

          <div className="border border-[#E7E7E9] p-6 rounded-xl bg-bg">
            <div className="p-3 bg-bg rounded-xl border border-[#E7E7E9] w-min">
              {" "}
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="none"
              >
                <circle
                  cx={16}
                  cy={14.667}
                  r={4}
                  stroke="#13151B"
                  strokeWidth={2.5}
                />
                <path
                  stroke="#13151B"
                  strokeWidth={2.5}
                  d="M25.334 14.666c0 5.891-6 12-9.334 12-3.333 0-9.333-6.109-9.333-12 0-5.89 4.179-9.333 9.333-9.333 5.155 0 9.334 3.442 9.334 9.333Z"
                />
                <path
                  stroke="#13151B"
                  strokeLinecap="round"
                  strokeWidth={2.5}
                  d="M27.938 8c.893 1.75 1.395 3.817 1.395 6.167 0 1.508-.297 3.027-.811 4.5m-25.044 0c-.514-1.473-.812-2.992-.812-4.5 0-2.35.503-4.417 1.396-6.167"
                />
              </svg>
            </div>
            <h2 className="mt-6 font-semibold ">Visit Us</h2>
            <p className="text-base text-[#475464] mt-3">
              You can directly call us at 
            </p>
            <p className="text-base font-semibold ">+1 (347) 480-1903</p>
            <p className="text-base text-[#475464]">
              {" "}
               to discuss your project specifications.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ContactPage;
