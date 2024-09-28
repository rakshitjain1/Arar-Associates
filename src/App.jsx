import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

import About from "./Pages/About";

import Infra from "./Pages/Infra";
import Navbar from "./components/Navbar/Navbar";
import Career from "./Pages/Career";
import Gallery from "./Pages/Gallery";
import Resources from "./Pages/Resources";
import Contact from "./Pages/Contact";
import OurTeam from "./Pages/OurTeam";


const App = () => {
 
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
   
    
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/infra" element={<Infra />}></Route>
      <Route path="/carrer" element={<Career />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/resources" element={<Resources/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/team" element={<OurTeam/>}></Route>
    </Routes>
 
  </BrowserRouter>
  );
};

export default App;
