"use client";
import Image from "next/image";
import Logo from "@/app/assets/images/Utopian Takeoff Logo.svg";
import Link from "next/link";
import { ChartPie, ChevronDown, Menu } from "lucide-react";
import { Services } from "@/constants/Info";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
const Trade = [
  {
    name: "Concrete Estimating",
    link: "/",
    icon: <ChartPie color="#972A20" size={20} />,
  },
  {
    name: "Opening Estimating",
    link: "/",
    icon: <ChartPie color="#972A20" size={20} />,
  },
  {
    name: "Masonry Estimating",
    link: "/",
    icon: <ChartPie color="#972A20" size={20} />,
  },
  {
    name: "Interior & Exterior Finishes",
    link: "/",
    icon: <ChartPie color="#972A20" size={20} />,
  },
  {
    name: "Metals Estimating",
    link: "/",
    icon: <ChartPie color="#972A20" size={20} />,
  },
  {
    name: "Furnishes",
    link: "/",
    icon: <ChartPie color="#972A20" size={20} />,
  },
  {
    name: "Wood & Plastic Composites",
    link: "/",
    icon: <ChartPie color="#972A20" size={20} />,
  },
  {
    name: "MEP",
    link: "/",
    icon: <ChartPie color="#972A20" size={20} />,
  },
  {
    name: "Thermal Protection",
    link: "/",
    icon: <ChartPie color="#972A20" size={20} />,
  },
  {
    name: "Earthwork Estimating",
    link: "/",
    icon: <ChartPie color="#972A20" size={20} />,
  },
  {
    name: "Sitework Estimating",
    link: "/",
    icon: <ChartPie color="#972A20" size={20} />,
  },
  {
    name: "Pricing",
    link: "/",
    icon: <ChartPie color="#972A20" size={20} />,
  },
];
// <div>Cost Estimation</div>
// <div>Material Takeoffs</div>
// <div>Dedicated Construction Estimation</div>
// <div>Residential Estimating</div>
// <div>Commercial Estimating</div>
// <div>Industrial Estimating</div>
// <div>Estimating Consultant</div>
const MenuItem = ({ name, icon, link }) => (
  <Link
    href={link}
    className="flex flex-row gap-2 p-2 items-center justify-start hover:bg-background-500 group/menuitem duration-150 rounded-md  w-full"
  >
    <div className="p-2 bg-background-500 rounded-md">{icon}</div>
    <p className=" font-normal text-nowrap">
      {name}
    </p>
  </Link>
);

export default function NavBar() {
  const path = usePathname();
  console.log(path);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-screen   ${
        isScrolled ? "bg-bg/95 backdrop-blur-xl shadow-md" : "bg-transparent"
      } z-50`}
    >
      <div className="flex flex-row w-full 2xl:w-[1440px] mx-auto justify-between items-center  px-5 pt-5 md:px-12 md:py-4 ">
        <Image src={Logo} width={60} height={60} />
        <div className="hidden md:flex flex-row gap-24 items-center">
          <Link
            className={` ${path === "/" && "font-semibold"} hover:cursor-pointer`}
            href={"/"}
          >
            Home
          </Link>
          <Link href={"#trades"} className="hover:cursor-pointer flex flex-row">
            Trades
          </Link>
      {
          /* <Link
            href={"#services"}
            className="hover:cursor-pointer flex flex-row"
          >
            Service
          </Link> */}

           <div className="group flex flex-col ">
          <p className="hover:cursor-pointer flex flex-row">Service</p>
          <div className="group-hover:flex duration-300 transition-all hover:flex hidden w-min flex-col gap-4 absolute -translate-x-12 shadow-md mt-6 p-6 bg-bg rounded-[16px] border-primary border ">
            {Services.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                link={`${item.link}`}
                icon={item.icon}
              />
            ))}
          </div>
        </div> 
          {/* <div className="group flex flex-col  ">
          <p className="hover:cursor-pointer text-nowarp flex flex-row ">
            Trades{"  "}
            
          </p>
          <div className="group-hover:grid hover:grid hidden grid-cols-2 gap-x-4 gap-y-5 absolute -translate-x-12 shadow-md mt-6 p-6 bg-bg rounded-[16px] border-[#D5D5D5] border ">
            {Trade.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                link={item.link}
                icon={item.icon}
              />
            ))}
          </div>
        </div> */}
          <Link
            className={` ${path === "/sample" && "font-semibold"} hover:cursor-pointer`}
            href={"/sample"}
          >
            Sample
          </Link>
          {/* <Link
                    className={` ${path === "/about" && "font-semibold"} hover:cursor-pointer`}
                    href={"/"}
                >
                    About Us
                </Link> */}
        </div>

        <div className="hidden md:flex flex-row justify-center items-center gap-4">
          <Link
            href={"/contact"}
            className="py-[14px] px-6 rounded-full font-bold text-xl bg-[#FAFAFB] text-bg "
          >
            Get Estimated
          </Link>
        </div>
        <div className="md:hidden bg-[#601E1A2B]/10 p-3 rounded-lg">
          <Menu />
        </div>
      </div>
    </div>
  );
}
