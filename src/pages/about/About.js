import React from "react";
import Banner from "../../components/banner/Banner";
import CollapseAbout from "../../components/collapseAbout/CollapseAbout";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "../reset.css";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <Header />
      <Banner page="about" />
      <CollapseAbout />
      <Footer />
    </div>
  );
};

export default About;
