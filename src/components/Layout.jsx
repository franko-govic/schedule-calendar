import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="h-dvh">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
