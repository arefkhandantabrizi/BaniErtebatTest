import React, { useEffect, useState } from "react";
import Icon from "./icon";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    window.pageYOffset > 120 ? setIsVisible(true) : setIsVisible(false);
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => setIsVisible({});
  }, []);

  return (
    <>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <Icon name="icon-circle-up" className="scroll-to-top__icon" />
        </div>
      )}
    </>
  );
}
