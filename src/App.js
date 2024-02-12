import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Property from "./pages/property/Property";
import PageError from "./pages/page_error/PageError";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property" element={<Property />} />
        <Route path="/*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
