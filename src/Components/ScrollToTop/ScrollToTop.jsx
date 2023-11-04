import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./ScrollToTop.css";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollTop = () => {
    const topElement = document.getElementById("#top") || document.body;
    topElement.scrollIntoView({ behavior: "smooth" });
  };

  return isVisible ? (
    <div className="scroll-top">
      <a onClick={handleScrollTop}>
        <ArrowUpwardIcon fontSize="large" />
      </a>
    </div>
  ) : null;
};
