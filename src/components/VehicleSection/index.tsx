import { useEffect, useRef } from "react";
import ProductAuctionCard from "../ProductAuctionCard";
import ProductCard from "../ProductCard";
import { ThemeSection } from "./style";
import { IVehicleSectionProps } from "./types";

const VehicleSection = ({ data, title, type }: IVehicleSectionProps) => {
  const carousel: any = useRef();

  useEffect(() => {
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    carousel.current.addEventListener("mousedown", (e: any) => {
      isDown = true;
      startX = e.pageX - carousel.current.offsetLeft;
      scrollLeft = carousel.current.scrollLeft;
    });
    carousel.current.addEventListener("mouseleave", () => {
      isDown = false;
    });
    carousel.current.addEventListener("mouseup", () => {
      isDown = false;
    });
    carousel.current.addEventListener("mousemove", (e: any) => {
      if (!isDown) return;
      const x = e.pageX - carousel.current.offsetLeft;
      const walk = x - startX;
      carousel.current.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <ThemeSection>
      <h2>{title}</h2>
      <ul ref={carousel}>
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
