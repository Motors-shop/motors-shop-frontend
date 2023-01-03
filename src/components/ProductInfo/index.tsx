import VehicleDetail from "../VehicleDetail";

import { IProductInfoProps } from "../../pages/Product/types";
import { Content, ThemeDescription } from "./style";

const ProductInfo = ({ data }: IProductInfoProps) => {
  const { capeImage, description } = data;

  return (
    <Content>
      <div className="capeImage">
        <img src={capeImage} alt="Veículo anunciado" />
      </div>
      <VehicleDetail data={data} />
      <ThemeDescription>
        <h3>Descrição</h3>
        <p>{description}</p>
      </ThemeDescription>
    </Content>
  );
};

export default ProductInfo;
