import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhone, FaFacebook, FaWhatsapp, FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import DarkMode from "./DarkMode";
import Logo from "../../assets/logo.png"; // Import the logo

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Infra", link: "/infra" },
  { id: 4, name: "Career", link: "/carrer" },
  { id: 5, name: "Gallery", link: "/gallery" },
  { id: 6, name: "Resources", link: "/resources" },
  { id: 7, name: "Contact us", link: "/contact" },
  { id: 8, name: "Our Team", link: "/team" },
];

const DropdownLinks = [
  { id: 1, name: "Services", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle mobile menu visibility
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src={Logo} alt="Logo" className="w-10" />
            Arar Associates
          </Link>

          {/* Contact and Social buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact">
              <button className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                <FaPhone className="text-xl" />
                <span className="group-hover:block hidden">Contact Us</span>
              </button>
            </Link>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                <FaFacebook className="text-xl" />
                <span className="group-hover:block hidden">Facebook</span>
              </button>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                <FaWhatsapp className="text-xl" />
                <span className="group-hover:block hidden">WhatsApp</span>
              </button>
            </a>
            <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                <BiLogoGmail className="text-xl" />
                <span className="group-hover:block hidden">Gmail</span>
              </button>
            </a>

            {/* Dark Mode Switch */}
            <DarkMode />
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar with Menu Links */}
      <div className="md:flex justify-center hidden">
        <ul className="flex items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <NavLink
                to={data.link}
                className={({ isActive }) =>
                  isActive
                    ? "inline-block px-4 text-primary"
                    : "inline-block px-4 hover:text-primary"
                }
              >
                {data.name}
              </NavLink>
            </li>
          ))}

          {/* Dropdown Menu */}
          <li className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              Services
              <FaCaretDown className="group-hover:rotate-180 transition-transform duration-200" />
            </div>
            <div className="absolute z-10 hidden group-hover:block bg-white dark:bg-gray-700 p-2 rounded shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link to={data.link} className="block p-2 hover:bg-primary/10">
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 p-4 absolute top-full left-0 w-full z-20">
          <ul className="space-y-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <NavLink
                  to={data.link}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "block text-primary"
                      : "block hover:text-primary"
                  }
                >
                  {data.name}
                </NavLink>
              </li>
            ))}

            {/* Mobile Dropdown */}
            <li className="relative">
              <div className="flex items-center gap-1 cursor-pointer">
                Services
                <FaCaretDown />
              </div>
              <ul className="pl-4 mt-2">
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      onClick={toggleMenu}
                      className="block hover:text-primary"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
