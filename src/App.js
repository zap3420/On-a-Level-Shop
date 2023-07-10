import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./CartContext";
import Faq from "./FAQ";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(25 25 30)",
      text: "rgba(30, 30, 29, .8)",
      white: "#fff",
      black: " #000000",
      helper: "#A187FF",

      bg: "#F8F9FB",
      footer_bg: "#4474C7",
      btn: "#5B4EDB",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(133 145 256) 0%, rgb(99 190 253) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(29, 33, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FAQ - Shipping" element={<Faq />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </CartProvider>
  );
};
export default App;
