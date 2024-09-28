import React from "react";
import Img1 from "../../assets/tax.jpg";
import Img2 from "../../assets/tax.jpg";
import Img3 from "../../assets/tax.jpg";
import Img4 from "../../assets/tax.jpg";

import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",

    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
   
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
  
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    
 
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img2,
    title: "Fashin T-Shirt",
 
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Services  for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
           Services
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-4 border-red-700">
            {/* card section */}
            {ProductsData.map((data) => (
              <div 
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[300px] w-[300px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                </div>
              </div>
            ))}
          </div> 
         
        </div>
      </div>
    </div>
  );
};

export default Products;
