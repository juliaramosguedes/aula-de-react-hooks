import * as React from "react";

import Navbar from "../navbar";

const Layout = ({children}) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;
