import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "../reset.css";
import "./about.css";

const About = () => {
  const { page } = useParams();
  return (
    <div className="about">
      <Header />
      <Banner page={page} />
      <Footer />
    </div>
  );
};

export default About;
