import { useEffect, useState } from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import VehicleSection from "../../components/VehicleSection";
import ThemeButton from "../../components/ThemeButton";

import { Contaier } from "./style";

import { api } from "../../service/api";
import { IProductData } from "./types";

const Home = () => {
  const [cars, setCars] = useState<IProductData[]>([]);
  const [motorbikes, setMotorbikes] = useState<IProductData[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    api
      .get("/vehicles")
      .then((res) => {
        const data: IProductData[] = res.data;

        setCars(data.filter(({ type }) => type === "CARRO"));
        setMotorbikes(data.filter(({ type }) => type === "MOTO"));
      })
      .catch((err) => console.log(err));
  }, []);

  const scrollTo = (name: string) => {
    const section = window.document.getElementById(name);
    const rect = section!.getBoundingClientRect();

    const position = rect.top + window.scrollY;
    const navBar = 15 * (window.innerHeight / 100);

    window.scrollTo(0, position - navBar);
  };

  return (
    <>
      <Navbar />
      <Contaier>
        <div>
          <p>Velocidade e experiência em um lugar feito para você</p>
          <span>Um ambiente feito para você explorar o seu melhor</span>
          <div>
            <ThemeButton outlined variant="light" onClick={() => scrollTo("cars")}>
              Carros
            </ThemeButton>
            <ThemeButton outlined variant="light" onClick={() => scrollTo("motorbikes")}>
              Motos
            </ThemeButton>
          </div>
        </div>
        <VehicleSection type="auction" title="Leilão" data={cars} id="auction" />
        <VehicleSection type="products" title="Carros" data={cars} id="cars" />
        <VehicleSection type="products" title="Motos" data={motorbikes} id="motorbikes" />
      </Contaier>
      <Footer />
    </>
  );
};

export default Home;
