import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import logo from "../images/logo.png";
import { div } from "framer-motion/client";
import contactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {
      item: "Home",
      href: "/",
    },
    {
      item: "About",
      href: "/aboutUs",
    },
    {
      item: "Services",
      href: "/ourServices",
    },
    {
      item: "Gallery",
      href: "/gallery",
    },
    {
      item: "Contact",
      href: "/contactUs",
    },
  ];
  return (
    <>
      <nav className="relative bg-[var(--main-color)] px-[16px] py-4 md:px-[60px] lg:px-[100px] flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <img
          src={logo}
          alt="toriah-daisy-logo"
          className="h-[20px] md:h-[40px] lg:h-[50px] object-contain"
        />
        <div className="hidden md:flex justify-between items-center">
          <ul className="flex justify-between items-center md:space-x-4 lg:space-x-6 text-white font-normal text-sm ">
            {navItems.map((item, i) => (
              <li
                key={i} className="relative group"
              >
                <Link to={item.href} className="hover:text-[var(--tertiary-color)] hover:text-base hover:font-medium transition-all">{item.item}</Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--tertiary-color)] transition-all duration-300 group-hover:w-full"></span> 
              </li>
              
            ))}
          </ul>
        </div>

        <button
          className="md:hidden text-[#dda15e]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 right-[16px] w-[200px] bg-[var(--main-color)] opacity-90 z-50 md:hidden rounded">
            <ul className="flex flex-col text-sm items-center py-4 space-y-4">
              {navItems.map((item, i) => (
                <li key={i} className="text-[#fefae0]">
                  <Link to={item.href} onClick={() => setIsOpen(false)}>
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
