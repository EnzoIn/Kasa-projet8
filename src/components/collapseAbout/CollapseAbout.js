import React, { useState } from "react";
import "./collapseAbout.css";

const CollapseAbout = () => {
  const [collapseStates, setCollapseStates] = useState({
    fiabilite: true,
    respect: true,
    service: true,
    securite: true,
  });

  const toogleCollapse = (section) => {
    setCollapseStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="container">
      <div className="collapse">
        <div className="collapse-container">
          <h2>Fiabilité</h2>
          <span 
            className={`collapse-animation ${collapseStates.fiabilite ? "" : "rotate-animation"}`}
          onClick={() => toogleCollapse("fiabilite")}>
            <img
              src="./assets/arrow_open.svg"
              alt="Icône de flèche pour afficher l'information."
            />
          </span>
        </div>
        {!collapseStates.fiabilite && (
          <div className={`collapse-infos collapse-animation ${collapseStates.fiabilite ? "" : "fade-animation"}`}>
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        )}
      </div>

      <div className="collapse">
        <div className="collapse-container"
        >
          <h2>Respect</h2>
          <span 
          className={`collapse-animation ${collapseStates.respect ? "" : "rotate-animation"}`}
          onClick={() => toogleCollapse("respect")}>
            <img
              src="./assets/arrow_open.svg"
              alt="Icône de flèche pour afficher l'information."
            />
          </span>
        </div>
        {!collapseStates.respect && (
          <div className={`collapse-infos collapse-animation ${collapseStates.respect ? "" : "fade-animation"}`}>
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        )}
      </div>

      <div className="collapse">
        <div className="collapse-container"
        >
          <h2>Service</h2>
          <span 
          className={`collapse-animation ${collapseStates.service ? "" : "rotate-animation"}`}
          onClick={() => toogleCollapse("service")}>
            <img
              src="./assets/arrow_open.svg"
              alt="Icône de flèche pour afficher l'information."
            />
          </span>
        </div>
        {!collapseStates.service && (
          <div className={`collapse-infos collapse-animation ${collapseStates.service ? "" : "fade-animation"}`}>
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        )}
      </div>

      <div className="collapse">
        <div className="collapse-container"
        >
          <h2>Sécurité</h2>
          <span 
          className={`collapse-animation ${collapseStates.securite ? "" : "rotate-animation"}`}
          onClick={() => toogleCollapse("securite")}>
            <img
              src="./assets/arrow_open.svg"
              alt="Icône de flèche pour afficher l'information."
            />
          </span>
        </div>
        {!collapseStates.securite && (
          <div className={`collapse-infos collapse-animation ${collapseStates.securite ? "" : "fade-animation"}`}>
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollapseAbout;
