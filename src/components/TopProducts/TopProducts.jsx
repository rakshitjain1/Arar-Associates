import React from "react";
import Img1 from "../../assets/tax.jpg";
import Img2 from "../../assets/tax.jpg";
import Img3 from "../../assets/tax.jpg";

import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    // img: Img1,
    title: "Delhi",
    description:
      "610, New Delhi House Barakhamba Road New Delhi-110001 Tel: +011 41511980",
  },
  {
    id: 2,
    // img: Img1,
    title: "Delhi",
    description:
      "610, New Delhi House Barakhamba Road New Delhi-110001 Tel: +011 41511980",
  },
  {
    id: 3,
    // img: Img1,
    title: "Delhi",
    description:
      "610, New Delhi House Barakhamba Road New Delhi-110001 Tel: +011 41511980",
  },

];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
       Offices
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
               
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
