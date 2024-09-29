import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button after scrolling down 200px
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Button is shown only when the user scrolls past 200px */}
      {showButton && (
        <div className="scroll-to-top" style={containerStyle}>
          <button onClick={scrollToTop} style={buttonStyle}>
          <FaArrowUp/>
          </button>
        </div>
      )}
    </>
  );
};

const containerStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#fea928',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default ScrollToTop;
