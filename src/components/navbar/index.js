import React from "react";

import { AuthButton, ListItem, Nav, StyledMoon, StyledSun } from "./style";
import { useTheme, useAuth } from "../../contexts";

const Navbar = () => {
  const { theme, switchTheme } = useTheme();
  const { signed, signIn, signOut } = useAuth();

  return (
    <Nav>
      <ul>
        <ListItem><a href="/">Home</a></ListItem>
        <ListItem><a href="/capture">Capture</a></ListItem>
      </ul>
      <div>
        {theme === "dark" ? (
          <StyledSun size={32} onClick={() => switchTheme("light")} />
        ) : (
          <StyledMoon size={32} onClick={() => switchTheme("dark")} />
        )}
        <AuthButton onClick={signed ? signOut : signIn}>Sign {signed ? "Out" : "In"}</AuthButton>
      </div>
    </Nav>
  );
};

export default Navbar;
