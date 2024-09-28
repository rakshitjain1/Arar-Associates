import React from "react";
import { Link, NavLink } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaPhone, FaFacebook, FaWhatsapp, FaCaretDown } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about", // Lowercase for consistency
  },
  {
    id: 3,
    name: "Infra",
    link: "/infra",
  },
  {
    id: 4,
    name: "Career",
    link: "/carrer",
  },
  {
    id: 5,
    name: "Gallery",
    link: "/gallery",
  },
  {
    id: 6,
    name: "Resources",
    link: "/resources",
  },
  {
    id: 7,
    name: "Contact us",
    link: "/contact",
  },
  {
    id: 8,
    name: "Our Team",
    link: "/team",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Services",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2"> {/* Use Link here */}
              <img src={Logo} alt="Logo" className="w-10" />
              Arar associates
            </Link>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
  {/* Contact Us button with internal link */}
  <Link to="/contact">
    <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
      <span className="group-hover:block hidden transition-all duration-200">
        Contact Us
      </span>
      <FaPhone className="text-xl text-white drop-shadow-sm cursor-pointer" />
    </button>
  </Link>

  {/* Facebook button with external link */}
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
      <span className="group-hover:block hidden transition-all duration-200">
        Facebook
      </span>
      <FaFacebook className="text-xl text-white drop-shadow-sm cursor-pointer" />
    </button>
  </a>

  {/* WhatsApp button with external link */}
  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
    <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
      <span className="group-hover:block hidden transition-all duration-200">
        WhatsApp
      </span>
      <FaWhatsapp className="text-xl text-white drop-shadow-sm cursor-pointer" />
    </button>
  </a>

  {/* Gmail button with external link */}
  <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer">
    <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
      <span className="group-hover:block hidden transition-all duration-200">
        Gmail
      </span>
      <BiLogoGmail className="text-xl text-white drop-shadow-sm cursor-pointer" />
    </button>
  </a>

  {/* Darkmode Switch */}
  <div>
    <DarkMode />
  </div>
</div>

        </div>
      </div>

      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <NavLink
                to={data.link} // Use NavLink instead of <a>
                className={({ isActive }) =>
                  isActive
                    ? "inline-block px-4 text-primary duration-200"
                    : "inline-block px-4 hover:text-primary duration-200"
                }
              >
                {data.name}
              </NavLink>
            </li>
          ))}

          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-[2px] py-2">
              Services
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </div>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link} // Use Link here
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
