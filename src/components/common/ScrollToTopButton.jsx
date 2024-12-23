import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event to show/hide the button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Attach scroll event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop} // Use onClick in React
      title="Go To Top"
      className={`fixed z-50 bottom-10 right-5 p-4 border-0 w-10 h-10 rounded-full shadow-md bg-fuchsia hover:bg-purple-950 text-white text-lg font-semibold transition-colors duration-300 flex items-center justify-center ${
        isVisible ? "" : "hidden"
      } `}
    >
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
      </svg> */}
      <FaArrowUp size={30} />
      <span className="sr-only">Go to top</span>
    </button>
  );
};

export default ScrollToTopButton;
