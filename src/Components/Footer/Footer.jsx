import React from "react";
import "./Footer.css";
import { useThemes } from "../../Context/Theme";

export const Footer = () => {
  const { themeName } = useThemes();

  return (
    <>
      <div className={`section ${themeName}`}>
        <div className="footerBox">
          <p className="footer">
            © 2023 <span><a href="#top" rel="noreferrer" id="footer-link">
              mkevinbanawis
            </a></span> 
            <br/>All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
