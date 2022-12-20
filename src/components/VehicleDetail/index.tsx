import ThemeButton from "../ThemeButton";
import { ThemeDetailCard } from "./style";

const VehicleDetail = () => {
  return (
    <ThemeDetailCard>
      <h2>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h2>
      <div>
        <div className="tags">
          <span>2013</span>
          <span>0 KM</span>
        </div>
        <p>R$ 00.000,00</p>
      </div>
      <ThemeButton variant="primary">Comprar</ThemeButton>
    </ThemeDetailCard>
  );
};

export default VehicleDetail;
