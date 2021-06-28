import { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { themes } from "../styles/global-style";

export const ThemeContext = createContext("light");

export const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem("theme");
    return currentTheme || "light";
  });

  const switchTheme = (theme) => {
    localStorage.setItem("theme", theme)
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
