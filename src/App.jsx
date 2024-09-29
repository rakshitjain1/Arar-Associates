import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import pages and components
import Home from "./Pages/Home";
import About from "./Pages/About";
import Infra from "./Pages/Infra";
import Career from "./Pages/Career";
import Gallery from "./Pages/Gallery";
import Resources from "./Pages/Resources";
import Contact from "./Pages/Contact";
import OurTeam from "./Pages/OurTeam";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";  // ScrollToTop component
import Footer from "./components/Footer/Footer";

const App = () => {
  // Initialize AOS for animations
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
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/infra" element={<Infra />} />
        <Route path="/carrer" element={<Career />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes>
      
      {/* ScrollToTop component to appear across all pages */}
      <ScrollToTop />
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
