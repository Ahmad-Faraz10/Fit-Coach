import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "../page/ContactUS";

import Home from "../page/Home";
import Product from "../page/Product";
import About from "../page/About";
import Header from "../component/Header";
import Footer from "../component/Footer";
const AllRoutes = () => {
  return (
    <>
      {" "}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default AllRoutes;
