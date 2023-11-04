import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { useThemes } from "../../Context/Theme";
import Image from "./../../assets/MK_logo.png";
import "./Header.css";

export const Header = () => {
  const { themeName } = useThemes();

  return (
    <>
      <header className={`header center ${themeName}`}>
        <h3>
          <span>
            <img src={Image} alt="logo" />
          </span>
          <a href="#home" className="link">
            mkevinbanawis
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
