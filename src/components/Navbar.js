import Image from "next/image";
import Logo from "@/assets/images/Utopian Takeoff Logo.svg";
import Link from "next/link";

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
            <p className="hover:cursor-pointer">Service</p>
            <div className="group-hover:flex hover:flex hidden flex-col gap-4 absolute -translate-x-12 shadow-md mt-6 p-6 bg-bg rounded-[16px] border-[#D5D5D5] border ">
              <p>Cost Estimation</p>
              <p>Material Takeoffs</p>
              <p>Dedicated Construction Estimation</p>
              <p>Residential Estimating</p>
              <p>Commercial Estimating</p>
              <p>Industrial Estimating</p>
              <p>Estimating Consultant</p>
            </div>
          </div>
          <div className="group flex flex-col  ">
            <p className="hover:cursor-pointer">Trades</p>
            <div className="group-hover:grid hover:grid hidden grid-cols-2 gap-x-4 gap-y-5 absolute -translate-x-12 shadow-md mt-6 p-6 bg-bg rounded-[16px] border-[#D5D5D5] border ">
              <p>Concrete Estimating</p>
              <p>Opening Estimating</p>
              <p>Masonry Estimating</p>
              <p>Interior & Exterior Finishes</p>
              <p>Metals Estimating</p>
              <p>Furnishes</p>
              <p>Wood & Plastic Composites</p>
              <p>MEP</p>
              <p>Thermal Protection</p>
              <p>Earthwork Estimating</p>
              <p>Sitework Estimating</p>
              <p>Pricing</p>
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
