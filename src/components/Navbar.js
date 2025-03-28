"use client";
import Image from "next/image";
import Logo from "@/app/assets/images/Utopian Takeoff Logo.svg";
import Link from "next/link";
import { ChartPie, ChevronDown, Menu, X } from "lucide-react";
import { Services, Trade } from "@/constants/Info";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const MenuItem = ({ name, icon, link, onClick }) => (
  <Link
    href={link}
    onClick={onClick}
    className="flex flex-row gap-2 p-3 items-center justify-start hover:bg-background-500 group/menuitem duration-150 rounded-md w-full"
  >
    <div className="p-2 bg-background-500 rounded-md">{icon}</div>
    <p className="font-normal text-nowrap">{name}</p>
  </Link>
);

export default function NavBar() {
  const path = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveSubmenu(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  return (
    <div
      className={`fixed w-screen ${
        isScrolled ? "bg-bg/95 backdrop-blur-xl shadow-md" : "bg-transparent"
      } z-50`}
    >
      {/* Desktop Navigation */}
      <div className="flex flex-row w-full 2xl:w-[1440px] mx-auto justify-between items-center px-5 pt-5 md:px-12 md:py-4">
        <Image src={Logo} width={60} height={60} alt="Utopian Takeoff Logo" />

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row gap-24 items-center">
          <Link
            className={` ${path === "/" && "font-semibold"} hover:cursor-pointer`}
            href={"/"}
          >
            Home
          </Link>
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
          <div className="group flex flex-col  ">
            <p className="hover:cursor-pointer text-nowarp flex flex-row ">
              Trades{" "}
            </p>
            <div className="group-hover:grid hover:grid hidden grid-cols-2 gap-x-4 gap-y-5 absolute -translate-x-12 shadow-md mt-6 p-6 bg-bg rounded-[16px] border-primary border ">
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
          <Link
            className={` ${path === "/sample" && "font-semibold"} hover:cursor-pointer`}
            href={"/sample"}
          >
            Sample
          </Link>
          <Link
            className={` ${path === "/about" && "font-semibold"} hover:cursor-pointer`}
            href={"/about"}
          >
            About Us
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex flex-row justify-center items-center gap-4">
          <Link
            href={"/contact"}
            className="py-[14px] px-6 rounded-full font-bold text-xl bg-[#FAFAFB] text-bg "
          >
            Get Estimated
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden bg-[#601E1A2B]/10 p-3 rounded-lg cursor-pointer"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Slide-in */}
      <div
        className={`
          fixed top-0 right-0 w-[85%] h-full bg-bg 
          transform transition-transform duration-300 z-50
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6 space-y-4 overflow-y-auto h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center mb-6">
            <Image
              src={Logo}
              width={50}
              height={50}
              alt="Utopian Takeoff Logo"
            />
            <X onClick={closeMobileMenu} className="cursor-pointer" />
          </div>

          {/* Mobile Menu Items */}
          <div className="space-y-2">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`block p-3 ${path === "/" ? "font-semibold" : ""}`}
            >
              Home
            </Link>

            {/* Services Submenu */}
            <div>
              <div
                className="flex justify-between items-center p-3 cursor-pointer"
                onClick={() => toggleSubmenu("services")}
              >
                <span>Services</span>
                <ChevronDown
                  className={`transform transition-transform ${
                    activeSubmenu === "services" ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeSubmenu === "services" && (
                <div className="pl-4 space-y-2">
                  {Services.map((item, index) => (
                    <MenuItem
                      key={index}
                      name={item.name}
                      link={item.link}
                      icon={item.icon}
                      onClick={closeMobileMenu}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Trades Submenu */}
            <div>
              <div
                className="flex justify-between items-center p-3 cursor-pointer"
                onClick={() => toggleSubmenu("trades")}
              >
                <span>Trades</span>
                <ChevronDown
                  className={`transform transition-transform ${
                    activeSubmenu === "trades" ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeSubmenu === "trades" && (
                <div className="grid grid-cols-1 gap-2 pl-4">
                  {Trade.map((item, index) => (
                    <MenuItem
                      key={index}
                      name={item.name}
                      link={item.link}
                      icon={item.icon}
                      onClick={closeMobileMenu}
                    />
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/sample"
              onClick={closeMobileMenu}
              className={`block p-3 ${path === "/sample" ? "font-semibold" : ""}`}
            >
              Sample
            </Link>

            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={`block p-3 ${path === "/about" ? "font-semibold" : ""}`}
            >
              About Us
            </Link>

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block w-full text-center py-3 rounded-full font-bold text-xl bg-[#FAFAFB] text-bg mt-4"
            >
              Get Estimated
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
