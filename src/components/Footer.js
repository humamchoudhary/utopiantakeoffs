"use server";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/images/Utopian Takeoff Logo footer.svg";

const FooterColumn = ({ title, links = [] }) => (
  <div className="">
    <h3 className="text-[#808080] font-semibold mb-7">{title}</h3>
    <div className="flex flex-col gap-4">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-[#E9E9E9] hover:text-bg duration-100 text-sm leading-[normal]"
        >
          {link.text}
        </Link>
      ))}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="2xl:w-[1440px] rounded-[23px] flex flex-col py-9 px-12 mt-20 mb-6  lg:mx-5 2xl:mx-auto bg-fg">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-14">
        <div className="col-span-1 md:col-span-2 mb-3 gap-7">
          <Image src={Logo} width={52} height={52} />
          <div className="flex space-x-4 mb-4 mt-6">
            <Link href="#" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 0C2.23858 0 0 2.23858 0 5V15C0 17.7614 2.23858 20 5 20H15C17.7614 20 20 17.7614 20 15V5C20 2.23858 17.7614 0 15 0H5ZM16 5C16.5523 5 17 4.55228 17 4C17 3.44772 16.5523 3 16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
                  fill="white"
                />
              </svg>
            </Link>

            <Link href="#" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="18"
                viewBox="0 0 12 18"
                fill="none"
              >
                <path
                  d="M12 0H9C6.23858 0 4 2.23858 4 5V7H0V11H4V18H8V11H12V7H8V5C8 4.44772 8.44771 4 9 4H12V0Z"
                  fill="white"
                />
              </svg>
            </Link>

            <Link href="#" aria-label="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM4 6.5V20H0V6.5H4ZM7 6.5H11V7.34141C11.6256 7.12031 12.2987 7 13 7C16.3137 7 19 9.68629 19 13V20H15V13C15 11.8954 14.1046 11 13 11C11.8954 11 11 11.8954 11 13V20H7V13V6.5Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>

        <FooterColumn
          title="Company"
          links={[
            { href: "/", text: "Home" },
            { href: "/about", text: "About Us" },
            { href: "/features", text: "Features" },
            { href: "/how-it-works", text: "How it Works" },
          ]}
        />

        <FooterColumn
          title="Products"
          links={[
            { href: "/pricing", text: "Pricing" },
            { href: "/community", text: "Community" },
          ]}
        />

        <FooterColumn
          title="Help Center"
          links={[
            { href: "/privacy", text: "Privacy Policy" },
            { href: "/terms", text: "Terms & Conditions" },
            { href: "/cookies", text: "Cookies" },
          ]}
        />

        <FooterColumn
          title="Support"
          links={[
            { href: "/help", text: "Help Centre" },
            { href: "/contact", text: "Contact us" },
            {
              href: "mailto:support@Utakeoffs.com",
              text: "support@Utakeoffs.com",
            },
          ]}
        />
      </div>

      <div className="mt-16 text-center  text-sm text-[#808080]">
        <svg
          width="1344"
          height="1"
          viewBox="0 0 1344 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path opacity="0.2" d="M0 0.5L1344 0.5" stroke="#E9E9E9" />
        </svg>
        <p className="mt-6 text-[#808080] leading-5 text-sm">
          Copyright © 2024 Utopian Takeoffs. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
