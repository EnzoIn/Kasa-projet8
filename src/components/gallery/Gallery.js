import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "./gallery.css";

const Gallery = () => {
  const [datas, setDatas] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchGallery = async () => {
      const res = await fetch("./logements.json");
      const data = await res.json();
      setDatas(data);
      setLoad(true);
    };
    fetchGallery();
  }, []);

  return (
    <div className="gallery">
      <ul>
      {load ? (
          datas.map((property) => (
            <Card key={property.id} property={property} />
          ))
        ) : (
          <p>Chargement...</p>
        )}
      </ul>
    </div>
  );
};

export default Gallery;
