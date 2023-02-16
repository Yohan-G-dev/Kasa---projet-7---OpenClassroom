import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import ListCard from "../../components/listcard/ListCard";
import Footer from "../../components/footer/Footer";
import "./home.css";
import background from "../../assets/backgroundHome.jpg";

export default function Home() {
  return (
    <div className="onePage">
      <div className="main-content-wrap home">
        <Header />
        <Banner
          bannerText="Chez vous, partout et ailleurs"
          backgroundImg={background}
        />
        <ListCard />
      </div>
      <Footer />
    </div>
  );
}
