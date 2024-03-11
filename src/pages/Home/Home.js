import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import "./home.css";

const Home = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./api/logements.json");
      const data = await response.json();
      setDatas(data);
    };
    fetchData();
  }, []);

  return (
    <main className="home">
      <Banner
        page="home"
        title="Chez vous, partout et ailleurs"
        image="./assets/paysage1.png"
        alt="Point de vue de falaise proche de la mer."
      />
      <div className="gallery">
        {datas.map((property) => (
          <Card
            key={property.id}
            id={property.id}
            cover={property.cover}
            title={property.title}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
