import React, { useState } from "react";
import { headerData } from "../data/headerData";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logo, sun } from "../assets/images";
import { IoMenuOutline, IoClose } from "react-icons/io5";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Remove the third item (Company) from the headerData array
  const modifiedHeaderData = headerData.filter((item) => item.title !== "Company");

  // Take the first four items, not five, since "Company" was removed
  const firstFourItems = modifiedHeaderData.slice(0, 4);
  const lastTwoItems = modifiedHeaderData.slice(4);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Function to scroll to the top of the page
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-[88px] bg-white flex items-center justify-between mx-auto max-w-[1024px] lg:max-w-[1512px] pl-4 lg:pl-10 lg:pr-8`}
    >
      {/* Logo Container */}
      <div className="flex-shrink-0 flex justify-center items-center">
        <Link to="/" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" className="scale-110 w-[104px] h-[24px] " />
        </Link>
      </div>

      {/* Sliding Menu Items */}
      <div className=" flex justify-between items-center ">
        <div className="flex items-center ">
          <div className={`space-x-7  hidden lg:block`}>
            {firstFourItems.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                className={`font-medium w-[51px] h-[24px] leading-[20px] text-[18px] ${
                  location.pathname === item.url ? "text-primary" : "text-[#ABABAB] hover:text-black"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
          <div className=" flex items-center gap-[24px] ">
            <div className="flex items-center gap-[24px] max-md:hidden">{lastTwoItems.map((item, el) => (
              <Link
                key={item.id}
                to={item.url}
                className={`relative text-black ${
                  el === lastTwoItems.length - 1
                    ? "bg-primary text-white w-[160px] h-[40px] text-center pt-[10px] rounded-xl overflow-hidden group md:text-[12px] lg:text-[14px]"
                    : "lg:text-[14px]"
                }`}
                style={{ minWidth: "max-content" }}
              >
                <span className="relative z-10">{item.title}</span>
                {el === lastTwoItems.length - 1 && (
                  <div className="absolute inset-0 bg-black rounded-[50%] group-hover:rounded-[50%] transition-transform duration-700 ease-out group-hover:scale-150 scale-0 bg-opacity-10 group-hover:bg-opacity-100 animate-fadeToBlack h-28 w-36 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                )}
              </Link>
            ))}</div>
          <div className=" flex items-center">
            <img src={sun} alt="" className="bg-[#DDEFFF] p-3 rounded-full w-[48px] h-[48px] hidden lg:block" />
          </div>
            <div
              className={`md:flex lg:hidden flex-row-reverse  flex items-center gap-[5px] transition-all duration-500 ease-in-out `}
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <>
                  <IoClose className="w-[24px] h-[24px] transition-transform duration-500 ease-in-out" />
                  <p className="text-[18px] leading-[26px] transition-opacity duration-500 ease-in-out">Close</p>
                </>
              ) : (
                <>
                  <IoMenuOutline className="w-[24px] h-[24px] transition-transform duration-500 ease-in-out" />
                  <p className="text-[18px] leading-[26px] transition-opacity duration-500 ease-in-out">Menu</p>
                </>
              )}
            </div>
             {/* Dropdown Menu List */}
            <div
              className={`absolute top-[80px] left-0 right-0 bg-white w-full shadow-lg z-10 overflow-hidden transition-all duration-500 p-5 ease-in-out lg:hidden block ${
                menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {firstFourItems.map((item, index) => (
                <Link
                  key={item.id}
                  to={item.url}
                  className={`font-medium w-full py-[20px] leading-[20px] text-[24px] flex items-center ${
                    index < firstFourItems.length - 1 ? "border-b border-[#E0E0E0]" : ""
                  } ${
                    location.pathname === item.url ? "text-primary" : "text-[#ABABAB] hover:text-black"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

            {/* Menu Toggle Button */}
    </div>
  );
}
