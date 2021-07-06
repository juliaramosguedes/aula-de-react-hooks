import React from "react";


import { AuthButton, ListItem, Nav, StyledMoon, StyledSun } from "./style";
import { useTheme, useAuth } from "@/contexts";

const Navbar = () => {
  const { theme, switchTheme } = useTheme();
  const { signed, signIn, signOut } = useAuth();

  return (
    <Nav>
      <div>
        <ListItem exact to="/" activeStyle={{ fontWeight: "bold" }}>Home</ListItem>
        <ListItem exact to="/capture" activeStyle={{ fontWeight: "bold" }}>Capture</ListItem>
      </div>
      <div>
        <AuthButton onClick={signed ? signOut : signIn}>Sign {signed ? "Out" : "In"}</AuthButton>
        {theme === "dark" ? (
          <StyledSun size={32} onClick={() => switchTheme("light")}/>
        ) : (
          <StyledMoon size={32} onClick={() => switchTheme("dark")}/>
        )}
      </div>
    </Nav>
  );
};

export default Navbar;
