import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import "../reset.css";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <Header />
      <h2>404</h2>
      <p className="text">Oups! La page que vous demandez n'existe pas.</p>
      <>
        <Link to={"/home"}>Retourner sur la page d’accueil</Link>
      </>

      <Footer />
    </div>
  );
};

export default NotFound;
