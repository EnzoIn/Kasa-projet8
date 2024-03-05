import React from "react";
import Banner from "../../components/Banner/Banner";
import "./about.css";
import Collapse from "../../components/Collapse/Collapse";

const About = () => {
  return (
    <main className="about">
      <Banner
        page="about"
        image="./assets/paysage2.png"
        alt="Point de vue sur une chaîne de montagnes enneigées et une forêt."
      />
      <Collapse
        title="Fiabilité"
        body={
          <p>
            "Les annonces postées sur Kasa garantissent une fiabilité totale.
            Les photos sont conformes aux logements, et toutes les informations
            sont régulièrement vérifiées par nos équipes."
          </p>
        }
      />
      <Collapse
        title="Respect"
        body={
          <p>
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du volsinage
            entrainera une exclusion de notre plateforme."
          </p>
        }
      />
      <Collapse
        title="Service"
        body={
          <p>
            "Notre équipe dévouée est à votre service, prête à répondre à vos
            besoins. Votre satisfaction est notre priorité."
          </p>
        }
      />
      <Collapse
        title="Sécurité"
        body={
          <p>
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critéres de
            sécurité établis par nos services, En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes."
          </p>
        }
      />
    </main>
  );
};

export default About;
