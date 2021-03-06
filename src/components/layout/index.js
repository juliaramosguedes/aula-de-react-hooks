import * as React from "react";

import Navbar from "@/components/navbar";

const Layout = ({ children }) => (
  <>
    <Navbar/>
    {children}
  </>
);

export default Layout;
