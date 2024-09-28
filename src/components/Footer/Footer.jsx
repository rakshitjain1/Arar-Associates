import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/footer-pattern.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about", // Update this to match your about route
  },
  {
    title: "Contact",
    link: "/contact", // Update this to match your contact route
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Arar associates
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <Link to={link.link}>{link.title}</Link> {/* Use Link for internal navigation */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <Link to={link.link}>{link.title}</Link> {/* Use Link for internal navigation */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social links */}
            <div>
              {/* Social Media Links */}
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>

              {/* Location and Contact Info */}
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Delhi</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 123456789</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
