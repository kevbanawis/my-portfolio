import React, { useContext } from "react";
import { Navbar } from "../Navbar/Navbar";
import { useThemes } from "../../Context/Theme";

import "./Header.css";
export const Header = () => {
  const { themeName } = useThemes();

  return (
    <>
      <header className={`header center ${themeName}`}>
        <h3>
          <a href="#home" className="link">
            mkevinbanawis
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
