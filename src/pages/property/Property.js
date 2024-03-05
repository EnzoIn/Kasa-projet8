import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating";
import Tag from "../../components/Tag/Tag";
import NotFound from "../NotFound/NotFound";
import "./property.css";

const Property = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/logements.json");
      const data = await response.json();
      setProperty(data.find((item) => item.id === id) || null);
      setLoaded(true);
    };
    fetchData();
  }, [id]);

  if (!loaded) {
    return <div className="loader"></div>;
  }

  if (!property) {
    return <NotFound />;
  }

  return (
    <main className="property">
      <Carousel property={property} />
      <div className="property-container">
        <section className="property-description">
          <h1>{property.title}</h1>
          <h2>{property.location}</h2>
          <div className="property-tag">
            {property.tags.map((tag, index) => (
              <Tag key={index} title={tag} />
            ))}
          </div>
        </section>
        <section className="property-host">
          <figure>
            <img src={property.host.picture} alt="Portrait du propriétaire" />
            <figcaption>{property.host.name}</figcaption>
          </figure>
          <div className="rating">
            <Rating value={property.rating} />
          </div>
        </section>
      </div>
      <div className="property-collapse">
        <Collapse title="Description" body={property.description} />
        <Collapse
          title="Équipements"
          body={
            <ul>
              {property.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </main>
  );
};

export default Property;
