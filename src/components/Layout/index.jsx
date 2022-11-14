import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
