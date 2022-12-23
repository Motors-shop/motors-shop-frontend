import ProductAuctionCard from "../ProductAuctionCard";
import ProductCard from "../ProductCard";
import { ThemeSection } from "./style";
import { IVehicleSectionProps } from "./types";

const VehicleSection = ({ data, title, type }: IVehicleSectionProps) => {
  return (
    <ThemeSection>
      <h2>{title}</h2>
      <ul>
        {data.map((data) => (
          <li key={data.id}>
            {type === "products" && (
              <ProductCard
                title={data.title}
                description={data.description}
                tags={[data.year, `${data.km} KM`]}
                price={+data.price}
                coverImage={data.capeImage}
                owner={{ name: "Samuel Leão" }}
                to={`/product/${data.id}`}
              />
            )}
            {type === "auction" && (
              <ProductAuctionCard
                title={data.title}
                description={data.description}
                tags={[data.year, `${data.km} KM`]}
                price={+data.price}
                coverImage={data.capeImage}
                owner={{ name: "Samuel Leão" }}
                dueDate={new Date(2022, 12, 31)}
                to={`/product/${data.id}`}
              />
            )}
          </li>
        ))}
      </ul>
    </ThemeSection>
  );
};

export default VehicleSection;
