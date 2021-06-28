import React, { useContext } from "react";

import { ListItem, Nav, StyledMoon, StyledSun } from "../styles/NavbarStyle";
import { ThemeContext } from "../contexts";

const NavBar = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <Nav>
      <ul>
        <ListItem><a href="/">Home</a></ListItem>
        <ListItem><a href="/capture">Capture</a></ListItem>
      </ul>
      {theme === "dark" ? (
        <StyledSun size={32} onClick={() => switchTheme("light")} />
      ) : (
        <StyledMoon size={32} onClick={() => switchTheme("dark")} />
      )}
    </Nav>
  );
};

export default NavBar;
