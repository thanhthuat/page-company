import React from "react";
import Footer from "../common/footter";
import Header from "../common/header";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
