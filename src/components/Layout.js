import * as React from "react";

import NavBar from "./Navbar";

const Layout = ({children}) => (
  <>
    <NavBar />
    {children}
  </>
);

export default Layout;
