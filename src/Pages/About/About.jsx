import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import Accordion from "../../components/accordion/Accordion";
import background from "../../assets/backgroundAbout.jpg";
import aboutData from "../../data/aboutData";
import "./about.css";

export default function About() {
  return (
    <div className="onePage">
      <div className="main-content-wrap">
        <Header />
        <Banner backgroundImg={background} />
        <div className="wrapper">
          <div className="accordion">
            {aboutData.map((item, index) => {
              return (
                <Accordion
                  title={item.name}
                  text={item.text}
                  key={index + 500}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
