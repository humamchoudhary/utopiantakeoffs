import React from "react";

const ContactPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="mt-[243px] flex flex-col items-center justify-center gap-6 w-min px-14">
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

    
      <div className="flex flex-col md:flex-row mt-4 p-8 rounded-lg ">
      <div className="w-full md:w-2/3 pr-8">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-[13px] py-[14px] px-4 gap-[10px] rounded-lg">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 text-[16px] mb-[13px]">First Name</label>
              <input type="text" id="firstName" name="firstName" className="p-[14px] block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="First Name" />
            </div>
            <div className=" py-[14px] px-4 gap-[10px] rounded-lg">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 text-[16px] mb-[13px]">Last Name</label>
              <input type="text" id="lastName" name="lastName" className="p-[14px] block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Last Name" />
            </div>
          </div>
          <div className="mt-8  py-[14px] px-4  rounded-lg">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 text-[16px] mb-[13px]">Company Name</label>
            <input type="text" id="companyName" name="companyName" className="p-[14px] block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Your Company Name" />
          </div>
          <div className="mt-8  py-[14px] px-4 rounded-lg">
            <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700 text-[16px] mb-[13px]">Company Email</label>
            <input type="email" id="companyEmail" name="companyEmail" className="p-[14px] block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="you@company.com" />
          </div>
          <div className="mt-8 py-[14px] px-4 rounded-lg">
            <label htmlFor="planFile" className="block text-sm font-medium text-gray-700">Attach Your Plan</label>
            <input type="file" id="planFile" name="planFile" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
          </div>
          <div className="mt-8 mb-[13px] py-[14px] px-4 rounded-lg">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 text-[16px]">Phone Number</label>
            <div className="flex flex-row items-center mt-1 rounded-lg shadow-sm">
              <span className="inline-flex ">
                <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width={24} height={18} fill="none">
    <g clipPath="url(#a)">
      <mask
        id="b"
        width={25}
        height={18}
        x={-1}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M-.002 0h23.998v18H-.002V0Z" />
      </mask>
      <g fillRule="evenodd" clipRule="evenodd" mask="url(#b)">
        <path fill="#0C590B" d="M-1.504 0h27v18h-27V0Z" />
        <path
          fill="#fff"
          d="M-1.504 0h6.768v18h-6.768V0ZM16.027 7.925l-1.097-.232-.576.96-.12-1.112-1.09-.253 1.02-.457-.095-1.114.752.83 1.03-.436-.558.97.738.844h-.004Z"
        />
        <path
          fill="#fff"
          d="M16.439 10.758a4.26 4.26 0 0 1-5.67 2.088 4.293 4.293 0 0 1-2.092-5.699 4.17 4.17 0 0 1 2.51-2.26c-.145.12-.284.248-.415.383a3.948 3.948 0 0 0 5.67 5.488h-.003Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
              +92 
              <svg className="mr-[5px]"
              xmlns="http://www.w3.org/2000/svg"
              width={21}
              height={20}
              fill="none"
              
            >
              <path
                stroke="#24292E"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m6.5 8.333 4.167 3.334 4.166-3.334"
              />
            </svg>
            <svg
              className="mr-[10px] "
              xmlns="http://www.w3.org/2000/svg"
              width={2}
              height={16}
              fill="none"
            >
              <path stroke="#C3C3C3" strokeLinecap="round" d="M.667.5v15" />
            </svg>
            
            </span>
              <input type="text" id="phoneNumber" name="phoneNumber" className="p-[14px] flex-1 block w-full rounded-lg border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm" placeholder="XXX XXXXXXX" />
            </div>
          </div>
          <div className="mt-8 py-[14px] px-4 rounded-lg">
            <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 text-[16px] mb-[13px] ">Project Description</label>
            <textarea id="projectDescription" name="projectDescription" rows="3" className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Leave the project description here"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full py-3 px-[12px 16px] justify-center items-center gap-2 rounded-xl bg-primary text-bg hover:bg-red-900 ">Submit</button>
          </div>
        </form>
      </div>
      <div className="w-full md:w-1/3 mt-8 md:mt-0 md:pl-8 border-l border-gray-200 gap-[40px] ">
        <div className="space-y-6 ">
          <div >
            <h2 className="text-[24px] font-semibold mb-[10px]">Address</h2>
            <p className="text-[20px] mb-6 text-[#475464]">Your trusted estimating partner with a global presence.</p>
            <p className="flex flex-row items-center gap-[14px] text-[20px] font-semibold underline">
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
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
              7901 4th St N # 22518 St. Petersburg, FL 33702</p>
          </div>
          
          <div >
            <h2 className="mt-14 text-[24px] font-semibold mb-[10px]">Contact Info</h2>
            <p className="text-[20px] mb-6 text-[#475464]">Fast, reliable estimating services worldwide.</p>
            <p className="flex flex-row items-center font-semibold gap-[14px] text-[20px] mb-6 underline">
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
              <path
                stroke="#28303F"
                strokeLinecap="round"
                strokeWidth={2.5}
                d="M2.667 16V9.333A5.333 5.333 0 0 1 8 4h16a5.333 5.333 0 0 1 5.333 5.333v13.334A5.333 5.333 0 0 1 24 28H10.666M8 10.667l5.041 3.36a5.333 5.333 0 0 0 5.917 0L24 10.668M2.666 20h8m-8 4h8"
              />
            </svg>
              utopiantakeoffs10@gmail.com</p>
            <p className="flex flex-row items-center font-semibold gap-[14px] text-[20px] underline">
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
              <path
                stroke="#13151B"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M28 25.333V23.14c0-1.09-.664-2.071-1.676-2.476l-2.713-1.085a2.667 2.667 0 0 0-3.375 1.283l-.236.472s-3.333-.666-6-3.333c-2.667-2.667-3.333-6-3.333-6l.472-.236a2.667 2.667 0 0 0 1.283-3.376l-1.085-2.712A2.667 2.667 0 0 0 8.861 4H6.667A2.667 2.667 0 0 0 4 6.667C4 18.449 13.551 28 25.333 28A2.667 2.667 0 0 0 28 25.333Z"
              />
            </svg>
              +1 914 407 3061</p>
          </div>
          
          <div >
            <h2 className="mt-14 text-[24px] font-semibold mb-[10px]">Working Hours</h2>
            <p className="text-[20px] text-[#475464] mb-6">Available Mon to Sat for your estimating needs.</p>
            <p className="flex flex-row items-center gap-[14px] text-[20px] mb-[14px] font-semibold underline">
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
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
              Monday to Saturday</p>
            <p className="flex flex-row items-center gap-[14px] text-[20px] mb-[14px] font-semibold underline">
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
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
              9am to 5pm EST</p>
          </div>
          
          <div >
            <h2 className="mt-14 text-[24px] font-semibold mb-6">Get a Quick Quote</h2>
            <p className="text-[20px] text-[#475464] ">Connect with us today by submitting your information in the contact form to receive a quick quote, including an invoice and turnaround time, in just 5 minutes. If you have any additional queries, our representative will contact you within a day to discuss how we can collaborate.</p>
          </div>
        </div>
      </div>
      
    </div>
  
    <div>
        <h2 className="flex flex-row justify-center items-center font-bold mt-14 mb-16 text-[32px]">Other Ways To Get In Touch</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-4 ">
         
          <div className="shadow-md p-6 rounded-xl">
          <svg className="flex shadow-md rounded-xl flex-shrink-0 border-[#E7E7E9]" xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
            <path
              stroke="#13151B"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="m25.333 9.333 1.724-1.724c.52-.52.52-1.364 0-1.885L25.333 4M20 9.333l1.724-1.724c.52-.52.52-1.364 0-1.885L20 4m-2.667 2.667h4M28 23.139v2.194A2.667 2.667 0 0 1 25.333 28C13.551 28 4 18.449 4 6.667A2.667 2.667 0 0 1 6.667 4H8.86c1.09 0 2.071.664 2.476 1.676l1.085 2.712a2.667 2.667 0 0 1-1.283 3.376l-.472.236s.666 3.333 3.333 6c2.667 2.667 6 3.333 6 3.333l.236-.472a2.667 2.667 0 0 1 3.375-1.283l2.713 1.085A2.667 2.667 0 0 1 28 23.139Z"
            />
          </svg>
          <h2 className="mt-6 font-semibold ">Call</h2>
          <p className="text-base text-[#475464] mt-3">You can directly call us at </p> 
          <p className="text-base font-semibold ">+1 (347) 480-1903</p>
          <p className="text-base text-[#475464]"> to discuss your project specifications.</p>

        </div>
        <div className="shadow-md p-6 rounded-xl">
        <svg className="flex shadow-md rounded-xl flex-shrink-0 border-[#E7E7E9]" xmlns="http://www.w3.org/2000/svg" width={33} height={32} fill="none">
          <path
            stroke="#13151B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="m27.333 2.667 1.724 1.724c.52.52.52 1.365 0 1.885L27.333 8M22 5.334h6.666m-20 12 2.934 2.2a4 4 0 0 0 4.8 0l2.933-2.2m-12 12h13.333a4 4 0 0 0 4-4V14.667a4 4 0 0 0-4-4H7.333a4 4 0 0 0-4 4v10.667a4 4 0 0 0 4 4Z"
          />
        </svg>
          <h2 className="mt-6 font-semibold" >Email</h2>
          <p className="text-base text-[#475464] mt-3">You can directly send your plan to us on the given email: </p>
          <p className="text-base font-semibold">utopiantakeoffs10@gmail.com</p>

        </div>
        <div className="shadow-md p-6 rounded-xl">
        <svg className="flex shadow-md rounded-xl flex-shrink-0 border-[#E7E7E9]" xmlns="http://www.w3.org/2000/svg" width={33} height={32} fill="none">
          <path
            stroke="#28303F"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M23.497 10.897c3.634 1.632 6.17 5.318 6.17 9.603V25c0 1.657-1.327 3-2.963 3h-8.89c-3.87 0-7.162-2.504-8.382-6m14.065-11.103C22.56 6.941 19.046 4 14.852 4H13.37C7.643 4 3 8.701 3 14.5V19c0 1.657 1.327 3 2.963 3h3.469m14.065-11.103c.16.675.244 1.379.244 2.103 0 4.97-3.98 9-8.89 9h-5.42"
          />
        </svg>
          <h2 className="mt-6 font-semibold ">Live Chat</h2>
          <p className="text-base text-[#475464] mt-3">24/7 live chat support for instant assistance during critical times. </p> 
        </div>

        <div className="shadow-md p-6 rounded-xl">
          <svg className="flex shadow-md rounded-xl flex-shrink-0 border-[#E7E7E9]" xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
            <circle cx={16} cy={14.667} r={4} stroke="#13151B" strokeWidth={2.5} />
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

          <h2 className="mt-6 font-semibold ">Visit Us</h2>
          <p className="text-base text-[#475464] mt-3">You can directly call us at </p> 
          <p className="text-base font-semibold ">+1 (347) 480-1903</p>
          <p className="text-base text-[#475464]">  to discuss your project specifications.</p>

        </div>
        </div>
      </div>
    </main>
  );
};
export default ContactPage;
