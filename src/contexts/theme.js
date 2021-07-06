import { createContext, useContext, useState } from "react";
import { ThemeProvider as ThemeProviderStyle } from "styled-components";
import GlobalStyle, { themes } from "@/styles/global-style";

const ThemeContext = createContext("light");

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem("theme");
    return currentTheme || "light";
  });

  const switchTheme = (theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      <ThemeProviderStyle theme={themes[theme]}>
        <GlobalStyle/>
        {children}
      </ThemeProviderStyle>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider.");
  }

  return context;
};
