import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <main className="not-found">
      <h2>404</h2>
      <p className="text">Oups! La page que <span className="line-break">vous demandez n'existe pas.</span></p>
      <>
        <Link to={"/home"}>Retourner sur la page d’accueil</Link>
      </>
    </main>
  );
};

export default NotFound;
