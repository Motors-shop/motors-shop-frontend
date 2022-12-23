import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductAuctionCard from "../../components/ProductAuctionCard";
import ThemeButton from "../../components/ThemeButton";
import VehicleSection from "../../components/VehicleSection";
import { api } from "../../service/api";
import { Contaier } from "./style";
import { IProductData } from "./types";

const Home = () => {
  const [cars, setCars] = useState<IProductData[]>([]);
  const [motorbikes, setMotorbikes] = useState<IProductData[]>([]);
  useEffect(() => {
    api
      .get("/vehicles")
      .then((res) => {
        const data: IProductData[] = res.data;

        setCars(data.filter(({ type }) => type === "car"));
        setMotorbikes(data.filter(({ type }) => type === "motorbike"));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Contaier>
        <div>
          <p>Velocidade e experiência em um lugar feito para você</p>
          <span>Um ambiente feito para você explorar o seu melhor</span>
          <div>
            <ThemeButton outlined variant="light">
              Carros
            </ThemeButton>
            <ThemeButton outlined variant="light">
              Motos
            </ThemeButton>
          </div>
        </div>
        <VehicleSection type="auction" title="Leilão" data={cars} />
        <VehicleSection type="products" title="Carros" data={cars} />
        <VehicleSection type="products" title="Motos" data={motorbikes} />
      </Contaier>
      <Footer />
    </>
  );
};

export default Home;
