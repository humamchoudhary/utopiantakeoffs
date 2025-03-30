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

// Custom Link component with animated underline
const NavLink = ({ href, children, className }) => {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link href={href} className={`${className} relative group`}>
      <span className={`${isActive ? "font-semibold" : "font-normal"}`}>
        {children}
      </span>
      <span
        className={`absolute -bottom-1 left-0  h-0.5 bg-primary 
        transition-all duration-300 ease-in-out
        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </Link>
  );
};

export default function NavBar() {
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [path]);

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
      className={`fixed w-screen z-50 transition-all duration-300 pt-5 px-5`}
    >
      {/* Desktop Navigation */}

      <div className="relative">
        <div className="h-full rounded-md left-0 right-0 z-0 bg-bg opacity-60 absolute flex flex-row w-full 2xl:w-[1440px] mx-auto justify-between items-center px-5 md:px-12 md:py-4" />
        <div
          className={`relative rounded-md flex flex-row w-full z-10 2xl:w-[1440px] mx-auto justify-between items-center px-5 py-2 md:px-12 md:py-4 bg-bg/95 backdrop-blur-xl shadow-md`}
        >
          <Image src={Logo} width={45} height={45} alt="Utopian Takeoff Logo" />

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-row gap-24 items-center">
            <NavLink href="/">Home</NavLink>

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

            <NavLink href="/sample">Sample</NavLink>
            <NavLink href="/about">About Us</NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex flex-row justify-center items-center gap-4">
            <Link
              href={"/contact"}
              className="py-2 px-6 rounded-full font-bold text-lg bg-[#FAFAFB] hover:bg-primary hover:text-white duration-300 transition-all text-bg"
            >
              Get Estimated
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden hover:bg-[#0F142C]/40 border border-fghex/50 p-3 rounded-lg cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Slide-in - Fixed positioning so it's not affected by scroll */}
      <div
        className={`
         fixed top-0 right-0 w-[90%] h-full bg-bg 
          transform transition-transform duration-300 ease-in-out z-50
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ height: "100vh" }}
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
            {/* Mobile nav links with underline animation */}
            <div className="relative group">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`block p-3 ${path === "/" ? "font-semibold" : ""}`}
              >
                Home
              </Link>
              <span
                className={`absolute bottom-0 left-3 h-0.5 bg-primary transition-all duration-300 ease-in-out
                ${path === "/" ? "w-12" : "w-0 group-hover:w-12"}`}
              />
            </div>

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
                <div className="pl-0 space-y-2">
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
                <div className="grid grid-cols-1 gap-2 pl-0">
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

            {/* Sample link with underline animation */}
            <div className="relative group">
              <Link
                href="/sample"
                onClick={closeMobileMenu}
                className={`block p-3 ${path === "/sample" ? "font-semibold" : ""}`}
              >
                Sample
              </Link>
              <span
                className={`absolute bottom-0 left-3 h-0.5 bg-primary transition-all duration-300 ease-in-out
                ${path === "/sample" ? "w-16" : "w-0 group-hover:w-16"}`}
              />
            </div>

            {/* About Us link with underline animation */}
            <div className="relative group">
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className={`block p-3 ${path === "/about" ? "font-semibold" : ""}`}
              >
                About Us
              </Link>
              <span
                className={`absolute bottom-0 left-3 h-0.5 bg-primary transition-all duration-300 ease-in-out
                ${path === "/about" ? "w-20" : "w-0 group-hover:w-20"}`}
              />
            </div>

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
