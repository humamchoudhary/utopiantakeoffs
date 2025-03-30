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
          href={link.link}
          className="text-[#E9E9E9] hover:text-primary active:text-primary duration-100 text-sm leading-[normal]"
        >
          {link.name}
        </Link>
      ))}
    </div>
  </div>
);

import { Services, Trade } from "@/constants/Info";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" 2xl:w-[1440px] rounded-[23px] flex flex-col p-5 md:py-9 md:px-12 mt-20 mb-6 mx-2  lg:mx-5 2xl:mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-14">
        <div className="col-span-1 md:col-span-2 mb-3 gap-7">
          <Image src={Logo} width={52} height={52} />
          <div className="flex space-x-4 mb-4 mt-6">
            <Link
              href="https://www.linkedin.com/company/utopian-takeoffs/"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-6 hover:text-primary text-white duration-200 transition-all" />
            </Link>
          </div>
        </div>

        <FooterColumn
          title="General"
          links={[
            { link: "/", name: "Home" },
            { link: "/about", name: "About Us" },
            { link: "/sample", name: "Sample Work" },
          ]}
        />

        <FooterColumn title="Services" links={Services} />

        <FooterColumn title="Trades" links={Trade} />

        <FooterColumn
          title="Support"
          links={[
            { link: "/contact", name: "Contact us" },
            {
              link: "mailto:utopiantakeoffs10@gmail.com",
              name: "utopiantakeoffs10@gmail.com",
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
