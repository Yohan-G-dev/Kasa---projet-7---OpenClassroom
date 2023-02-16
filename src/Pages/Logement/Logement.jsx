import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Error from "../Error/Error";
import { useParams } from "react-router-dom";
import logementData from "../../data/logementData";
import Slider from "../../components/slider/Slider";
import "./logement.css";
import Accordion from "../../components/accordion/Accordion";
import { useEffect, useState } from "react";
import starEmpty from "../../assets/starEmpty.png";
import starFull from "../../assets/starFull.png";

export default function Logement() {
  const idLogement = useParams("id").id;
  const [data, setData] = useState([]);
  const listOfTags = data?.tags;
  const listOfEquipement = data?.equipments;
  const starColored = data?.rating;

  useEffect(() => {
    const getLogementData = logementData.find((c) => c.id === idLogement);

    setData(getLogementData);
  }, [idLogement]);

  if (!data) {
    return <Error />;
  }

  function ratings() {
    const rating = [];

    for (let stars = 1; stars < 6; stars++) {
      if (starColored >= stars) {
        rating.push(starFull);
      } else {
        rating.push(starEmpty);
      }
    }
    return rating;
  }

  //console.log(idLogement);

  return (
    <div className="onePage">
      <div className="main-content-wrap">
        <Header />
        <Slider imageSlider={data.pictures} />
        <main>
          <div className="li1">
            <div className="li1-col1">
              <h2>{data.title}</h2>
              <h3>{data.location}</h3>
              <ul className="tags">
                {listOfTags?.map((tag, index) => {
                  return <li key={index + 100}>{tag}</li>;
                })}
              </ul>
            </div>
            <div className="li1-col2">
              <div className="host">
                <p>
                  {data.host?.name.split(" ")[0]} <br />{" "}
                  {data.host?.name.split(" ")[1]}
                </p>
                <img src={data.host?.picture} alt="icône de l'hôte" />
              </div>
              <div className="rating">
                {ratings().map((rate, index) => {
                  return (
                    <img
                      src={rate}
                      alt={"note de " + starColored + " sur 5"}
                      key={index + 200}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="li2">
            <Accordion title={"Description"} text={data.description} />
            <Accordion
              title={"Équipements"}
              text={listOfEquipement?.map((i, index) => {
                return <li key={index + 300}>{i}</li>;
              })}
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
