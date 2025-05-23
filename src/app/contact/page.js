"use client";

import React, { useState } from "react";
import ContactFileUpload from "@/components/ContactFileUpload";
import Link from "next/link";
import BlurBackground from "@/components/GlowGlobs";
import { Phone } from "lucide-react";

const ContactPage = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    phoneNumber: "",
    projectDescription: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const data = new FormData();

      // Add form fields
      data.append("companyName", formData.companyName);
      data.append("companyEmail", formData.companyEmail);
      data.append("phoneNumber", formData.phoneNumber);
      data.append("projectDescription", formData.projectDescription);

      // Add files
      files.forEach((file, index) => {
        data.append(`file${index}`, file);
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      // console.log(result);
      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Your request has been submitted successfully!",
        });

        // Reset form
        setFormData({
          companyName: "",
          companyEmail: "",
          phoneNumber: "",
          projectDescription: "",
        });
        setFiles([]);
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: error.message || "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center ">
      <BlurBackground blurCount={2} />
      <div className="w-60 h-screen bg-primaryhex/10 absolute my-auto mx-auto blur-[200px] z-0" />

      <div className="md:mt-[120px] mt-[176px] flex flex-col items-center justify-center gap-5 md:gap-6   2xl:w-[1440px] px-5 md:px-14 z-10">
        <div className="md:px-5 md:py-3 py-2 px-4  border text-nowrap w-min border-[#972A20] bg-[#531712] rounded-full text-[#FAFAFB] text-sm md:text-lg font-semibold text-center">
          Save 30% of Your Estimating Expense
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[32px] text-center md:text-7xl font-bold text-fg  tracking-[-1.6px]">
            Contact Our Friendly Team
          </h1>
          <p className="md:mt-3 mt-2 text-center font-semibold text-xl text-[#5F6778] w-[335px] md:w-[800px]">
            Our expert team is here to assist you with all your construction
            estimating needs. Reach out for inquiries, quotes, or support—let's
            work together!
          </p>
        </div>
        <Link
          href={"https://calendly.com/hashimest16/30min"}
          className="px-4 py-3 font-bold text-xl mt:px-6 mt:py-3 rounded-full bg-[#FAFAFB] text-[#0F142C] flex flex-row items-center justify-center gap-[6px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M2.5 8a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-7a4 4 0 0 1-4-4zm15 1.333 1.54-1.643c1.241-1.323 3.46-.446 3.46 1.368v5.884c0 1.814-2.219 2.691-3.46 1.368l-1.54-1.643z"
              stroke="#0F142C"
              stroke-width="1.5"
            />
            <path
              d="M13.5 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
              stroke="#0F142C"
              stroke-width="1.5"
            />
          </svg>
          Book a call
        </Link>
      </div>
      <div className="flex flex-col md:flex-row w-full md:2xl:w-[1440px] gap-10 mt-32 px-[14px] md:px-[110px] rounded-lg ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:w-1/2 md:gap-8 gap-4"
        >
          {submitStatus && (
            <div
              className={`p-4 rounded-xl ${
                submitStatus.type === "success"
                  ? "bg-green-900/20 border border-green-700 text-green-400"
                  : "bg-red-900/20 border border-red-700 text-red-400"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="">
            <label
              htmlFor="companyName"
              className="block text-sm font-semibold text-fg md:text-[16px] mb-2 md:mb-[13px]"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="md:px-4 px-3 py-[10px] font-medium text-lg md:py-[14px] text-[#5E6272] block w-full bg-[#1F2129] rounded-xl border-[#2F323C] border shadow-sm "
              placeholder="Your Company Name"
              required
            />
          </div>
          <div className="">
            <label
              htmlFor="companyEmail"
              className="block text-sm font-semibold text-fg md:text-[16px] mb-2 md:mb-[13px]"
            >
              Company Email
            </label>
            <input
              type="email"
              id="companyEmail"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleInputChange}
              className="md:px-4 px-3 py-[10px] md:py-[14px] block w-full rounded-xl font-medium text-lg text-[#5E6272] bg-[#1F2129] border-[#2F323C] border shadow-sm "
              placeholder="you@company.com"
              required
            />
          </div>

          <ContactFileUpload files={files} setFiles={setFiles} />

          <div className="">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold text-fg md:text-[16px] mb-2 md:mb-[13px]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="px-3 py-[10px] md:px-4 md:py-[14px] block w-full rounded-xl font-medium text-lg text-[#5E6272] bg-[#1F2129] border-[#2F323C] border shadow-sm "
              placeholder="XXX XXXXXXX"
              required
            />
          </div>
          <div>
            <label
              htmlFor="projectDescription"
              className="block text-sm font-semibold text-fg md:text-[16px] mb-2 md:mb-[13px]"
            >
              Project Description
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              rows="8"
              className="px-3 py-[10px] md:px-4 md:py-[14px] block w-full rounded-xl font-medium text-lg text-[#5E6272] bg-[#1F2129] border-[#2F323C] border shadow-sm "
              placeholder="Leave the project description here"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:h-14 md:py-3 px-[12px 16px] py-3 md:px-4 hover:bg-fg transition-all duration-200 hover:text-primary justify-center items-center gap-2 rounded-xl bg-[#601E1A] text-[#FAFAFB] text-lg font-semibold leading-[normal] ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={2}
          height={940}
          fill="none"
          class="hidden md:block"
        >
          <path stroke="#EBEBEB" strokeLinecap="round" d="M1 1v938.013" />
        </svg>
        <div className="md:mt-8 md:gap-[40px] md:w-1/2">
          <div className="space-y-14">
            <div>
              <h2 className="md:text-[24px] text-base font-bold leading-[24px] mb-[4px] md:mb-[10px]">
                Address
              </h2>
              <p className="md:text-[22px] text-xs mb-4 md:mb-6 text-[#5E6272]">
                Your trusted estimating partner with a global presence.
              </p>
              <p className="flex flex-row items-center gap-[6px] md:gap-[14px] text-xs md:text-[20px] font-semibold underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="none"
                >
                  <path
                    stroke="#972A20"
                    strokeWidth={2.5}
                    d="M16.666 11a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0Z"
                  />
                  <path
                    stroke="#972A20"
                    strokeWidth={2.5}
                    d="M23.333 10.81c0 3.046-2.264 6.853-4.743 9.394C16.959 21.876 15.234 23 14 23c-1.235 0-2.959-1.124-4.59-2.796-2.48-2.541-4.744-6.348-4.744-9.394 0-5.05 4.18-9.143 9.334-9.143s9.333 4.093 9.333 9.143Z"
                  />
                  <path
                    stroke="#972A20"
                    strokeLinecap="round"
                    strokeWidth={2.5}
                    d="M18.206 20.586c4.553.568 7.794 2.032 7.794 3.747 0 2.21-5.373 4-12 4s-12-1.79-12-4c0-1.715 3.241-3.18 7.794-3.747"
                  />
                </svg>
                7901 4th St N # 22518 St. Petersburg, FL 33702
              </p>
            </div>

            <div>
              <h2 className="text-base md:text-[24px] font-bold mb-1 md:mb-[10px]">
                Contact Info
              </h2>
              <p className="text-xs md:text-[22px] mb-4 md:mb-6 text-[#5E6272]">
                Fast, reliable estimating services worldwide.
              </p>
              <p className="flex flex-row items-center font-semibold gap-[6px] md:gap-[14px] text-xs md:text-[20px] mb-2 md:mb-[14px] underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="none"
                >
                  <path
                    stroke="#972A20"
                    strokeLinecap="round"
                    strokeWidth={2.5}
                    d="M2.667 16V9.333A5.333 5.333 0 0 1 8 4h16a5.333 5.333 0 0 1 5.333 5.333v13.334A5.333 5.333 0 0 1 24 28H10.666M8 10.667l5.041 3.36a5.333 5.333 0 0 0 5.917 0L24 10.668M2.666 20h8m-8 4h8"
                  />
                </svg>
                utopiantakeoffs10@gmail.com
              </p>
              <p className="flex flex-row items-center font-semibold gap-[6px] md:gap-[14px] text-xs md:text-[20px] underline">
                <Phone className="text-primary size-7" />
                +1 315 784 0484
              </p>
            </div>

            <div>
              <h2 className="text-base md:text-[24px] font-bold mb-1 md:mb-[10px]">
                Working Hours
              </h2>
              <p className="text-xs md:text-[22px] text-[#5E6272] mb-4 md:mb-6">
                Available Mon to Sat for your estimating needs.
              </p>
              <p className="flex flex-row items-center gap-[6px] md:gap-[14px] text-xs md:text-[20px] mb-2 md:mb-[14px] font-semibold underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="none"
                >
                  <path
                    stroke="#972A20"
                    strokeWidth={2.5}
                    d="M4 8.667a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16.666a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8.667Z"
                  />
                  <path
                    stroke="#972A20"
                    strokeLinecap="round"
                    strokeWidth={2.5}
                    d="M4 12h24"
                  />
                  <path
                    stroke="#972A20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M10.666 2.667v4M21.334 2.667v4"
                  />
                  <circle cx={16} cy={20} r={1.333} fill="#972A20" />
                  <circle cx={21.333} cy={20} r={1.333} fill="#972A20" />
                  <circle cx={10.667} cy={20} r={1.333} fill="#972A20" />
                </svg>
                Monday to Saturday
              </p>
              <p className="flex flex-row items-center gap-[6px] md:gap-[14px] text-xs md:text-[20px] mb-[14px] font-bold underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="none"
                >
                  <path
                    stroke="#972A20"
                    strokeLinecap="round"
                    strokeWidth={2.5}
                    d="M29.333 16V6.667a4 4 0 0 0-4-4H6.667a4 4 0 0 0-4 4v18.666a4 4 0 0 0 4 4H12"
                  />
                  <path
                    stroke="#972A20"
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
              <h2 className="text-base md:text-[24px] font-bold mb-1 md:mb-6">
                Get a Quick Quote
              </h2>
              <p className="text-xs md:text-[22px] font-medium` text-[#5E6272] leading-6 md:leading-10 tracking-[0.24px] md:tracking-[-0.4px]">
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
        <h2 className="flex flex-row justify-center items-center text-center font-semibold mt-16 mb-6 md:mb-16 text-2xl text-[#972A20] leading-[48px] tracking-[-1.28px]">
          Other Ways To Get In Touch
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-1 md:sm:grid-cols-2 w-auto md:2xl:w-[1440px] md:lg:grid-cols-4 gap-4 md:gap-6 md:max-w-7xl mx-5 md:mx-4 ">
          <div className="bg-[#1F2129] border border-[#2F323C] p-6 rounded-xl">
            <div className="p-3 bg-[#2F3138] rounded-xl border border-[#2F323C] w-min">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="none"
              >
                <path
                  stroke="#FAFAFB"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="m25.333 9.333 1.724-1.724c.52-.52.52-1.364 0-1.885L25.333 4M20 9.333l1.724-1.724c.52-.52.52-1.364 0-1.885L20 4m-2.667 2.667h4M28 23.139v2.194A2.667 2.667 0 0 1 25.333 28C13.551 28 4 18.449 4 6.667A2.667 2.667 0 0 1 6.667 4H8.86c1.09 0 2.071.664 2.476 1.676l1.085 2.712a2.667 2.667 0 0 1-1.283 3.376l-.472.236s.666 3.333 3.333 6c2.667 2.667 6 3.333 6 3.333l.236-.472a2.667 2.667 0 0 1 3.375-1.283l2.713 1.085A2.667 2.667 0 0 1 28 23.139Z"
                />
              </svg>
            </div>
            <h2 className="mt-6 text-2xl font-semibold ">Call</h2>
            <p className="text-lg  font-medium leading-7 text-[#5E6272] mt-3">
              You can directly call us at{" "}
            </p>
            <p className="text-lg font-semibold ">+1 (315) 784-0484 </p>
            <p className="text-lg font-medium text-[#5E6272]">
              to discuss your project specifications.
            </p>
          </div>
          <div className=" bg-[#1F2129] border border-[#2F323C] p-6 rounded-2xl">
            <div className="p-3 bg-[#2F3138] rounded-xl   w-min">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width={33}
                height={32}
                fill="none"
              >
                <path
                  stroke="#FAFAFB"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="m27.333 2.667 1.724 1.724c.52.52.52 1.365 0 1.885L27.333 8M22 5.334h6.666m-20 12 2.934 2.2a4 4 0 0 0 4.8 0l2.933-2.2m-12 12h13.333a4 4 0 0 0 4-4V14.667a4 4 0 0 0-4-4H7.333a4 4 0 0 0-4 4v10.667a4 4 0 0 0 4 4Z"
                />
              </svg>
            </div>{" "}
            <h2 className="mt-6 text-2xl font-semibold">Email</h2>
            <p className="text-lg font-medium text-[#5E6272] mt-3">
              You can directly send your plan to us on the given email:{" "}
            </p>
            <p className="text-base font-semibold">
              utopiantakeoffs10@gmail.com
            </p>
          </div>
          <div className="bg-[#1F2129]  p-6 rounded-xl">
            <div className="p-3 bg-[#2F3138] rounded-xl w-min">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width={33}
                height={32}
                fill="none"
              >
                <path
                  stroke="#FAFAFB"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M23.497 10.897c3.634 1.632 6.17 5.318 6.17 9.603V25c0 1.657-1.327 3-2.963 3h-8.89c-3.87 0-7.162-2.504-8.382-6m14.065-11.103C22.56 6.941 19.046 4 14.852 4H13.37C7.643 4 3 8.701 3 14.5V19c0 1.657 1.327 3 2.963 3h3.469m14.065-11.103c.16.675.244 1.379.244 2.103 0 4.97-3.98 9-8.89 9h-5.42"
                />
              </svg>
            </div>
            <h2 className="mt-6 font-semibold text-2xl">Live Chat</h2>
            <p className="text-lg text-[#5E6272] mt-3">
              24/7 live chat support for instant assistance during critical
              times.{" "}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#1F2129]">
            <div className="p-3 bg-[#2F3138] rounded-xl  w-min">
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
                  stroke="#FAFAFB"
                  strokeWidth={2.5}
                />
                <path
                  stroke="#FAFAFB"
                  strokeWidth={2.5}
                  d="M25.334 14.666c0 5.891-6 12-9.334 12-3.333 0-9.333-6.109-9.333-12 0-5.89 4.179-9.333 9.333-9.333 5.155 0 9.334 3.442 9.334 9.333Z"
                />
                <path
                  stroke="#FAFAFB"
                  strokeLinecap="round"
                  strokeWidth={2.5}
                  d="M27.938 8c.893 1.75 1.395 3.817 1.395 6.167 0 1.508-.297 3.027-.811 4.5m-25.044 0c-.514-1.473-.812-2.992-.812-4.5 0-2.35.503-4.417 1.396-6.167"
                />
              </svg>
            </div>
            <h2 className="mt-6 font-semibold text-2xl">Visit Us</h2>
            <p className="text-lg text-[#5E6272] mt-3">You can visit us in</p>
            <p className="text-lg font-semibold ">
              {" "}
              7901 4th St N # 22518 St. Petersburg, FL 33702
            </p>
            <p className="text-lg text-[#5E6272]">
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
