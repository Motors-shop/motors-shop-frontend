import { IProductInfoProps } from "../../pages/Product/types";
import ThemeButton from "../ThemeButton";
import { ThemeDetailCard } from "./style";

const VehicleDetail = ({ data }: IProductInfoProps) => {
  const { title, year, km, price } = data;

  return (
    <ThemeDetailCard>
      <h2>{title}</h2>
      <div>
        <div className="tags">
          <span>{year}</span>
          <span>{km} KM</span>
        </div>
        <p>R$ {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
      </div>
      <ThemeButton variant="primary">Comprar</ThemeButton>
    </ThemeDetailCard>
  );
};

export default VehicleDetail;
