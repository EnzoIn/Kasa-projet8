import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";
import "../reset.css";
import "./home.css";

const Home = () => {
  const { page } = useParams();
  return (
    <div className="home">
      <Header />
      <Banner page={page} />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
