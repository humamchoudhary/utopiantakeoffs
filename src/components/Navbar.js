import Image from "next/image";
import Logo from "@/app/assets/images/Utopian Takeoff Logo.svg";
import Link from "next/link";
import { ChartPie, ChevronDown } from "lucide-react";
import { Services } from "@/constants/Info";
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
    className="flex flex-row gap-2 p-2 items-center justify-start hover:bg-[#EFE9E8] group/menuitem duration-150 rounded-md  w-full"
  >
    <div className="p-2 bg-[#E7DDDD] rounded-md">{icon}</div>
    <p className="group-hover/menuitem:font-semibold font-normal text-nowrap">
      {name}
    </p>
  </Link>
);

export default function NavBar() {
  return (
    <>
      <div className="flex flex-row justify-between items-center px-12 py-8 ">
        <Image src={Logo} width={52} height={52} />
        <div className="flex flex-row gap-24 items-center">
          <Link className="hover:cursor-pointer" href={"/"}>
            Home
          </Link>
          <div className="group flex flex-col ">
            <p className="hover:cursor-pointer flex flex-row">
              Service
              <ChevronDown />
            </p>
            <div className="group-hover:flex hover:flex hidden w-min flex-col gap-4 absolute -translate-x-12 shadow-md mt-6 p-6 bg-bg rounded-[16px] border-[#D5D5D5] border ">
              {Services.map((item, index) => (
                <MenuItem
                  key={index}
                  name={item.name}
                  link={item.link}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
          <div className="group flex flex-col  ">
            <p className="hover:cursor-pointer text-nowarp flex flex-row ">
              Trades{"  "}
              <ChevronDown />
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
          </div>
          <Link className="hover:cursor-pointer" href={"/"}>
            Sample
          </Link>
          <Link className="hover:cursor-pointer" href={"/"}>
            About Us
          </Link>
          <Link className="hover:cursor-pointer" href={"/"}>
            Get Estimate
          </Link>
        </div>
        <div>En</div>
      </div>
    </>
  );
}
