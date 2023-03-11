import React, { useEffect, useState } from "react";
import Cards from "./components/Products/Cards";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Cards />} />
          <Route exact path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
