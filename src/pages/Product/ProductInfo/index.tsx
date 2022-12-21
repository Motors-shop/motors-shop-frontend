import VehicleDetail from "../../../components/VehicleDetail";
import { Content, ThemeDescription } from "./style";

const ProductInfo = () => {
  return (
    <Content>
      <div className="capeImage">
        <img src="https://i.imgur.com/kOI65rU.png" alt="silver car" />
      </div>
      <VehicleDetail />
      <ThemeDescription>
        <h3>Descrição</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </p>
      </ThemeDescription>
    </Content>
  );
};

export default ProductInfo;
