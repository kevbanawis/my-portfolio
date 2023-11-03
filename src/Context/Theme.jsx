import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();
const useThemes = () => useContext(ThemeContext)

const ThemeProvider = ({ children }) => {

  const [themeName, setThemeName] = useState("dark");
  const toggleTheme = () => {
    setThemeName(
      (prevTheme) => ({
        "light": "dark",
        "dark": "light",
      }[prevTheme])
    );
  };

  return (
    <ThemeContext.Provider 
      value={{ themeName, toggleTheme }}
    >{children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { ThemeProvider, useThemes, ThemeContext };
