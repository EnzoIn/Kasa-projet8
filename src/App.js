import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Property from "./pages/Property/Property";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import "./reset.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
