import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import ProductAuctionCard from "../ProductAuctionCard";
import ProductCard from "../ProductCard";

import { ThemeSection } from "./style";
import { IVehicleSectionProps } from "./types";

const VehicleSection = ({ data, title, type }: IVehicleSectionProps) => {
  const { user_id } = useParams();

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
        {data.map((vehicle) => (
          <li key={vehicle.id}>
            {type === "products" && (
              <ProductCard
                title={vehicle.title}
                description={vehicle.description}
                tags={[vehicle.year, `${vehicle.km} KM`]}
                price={+vehicle.price}
                isOwner={!!user_id ? true : false}
                isPublished={vehicle.isPublished}
                coverImage={vehicle.capeImage}
                owner={{ name: vehicle.owner.name, id: vehicle.owner.id }}
                to={`/product/${vehicle.id}`}
              />
            )}
            {type === "auction" && (
              <ProductAuctionCard
                title={vehicle.title}
                description={vehicle.description}
                tags={[vehicle.year, `${vehicle.km} KM`]}
                price={+vehicle.price}
                coverImage={vehicle.capeImage}
                owner={{ name: vehicle.owner.name, id: vehicle.owner.id }}
                dueDate={new Date(2023, 12, 31)}
                to={`/product/${vehicle.id}`}
              />
            )}
          </li>
        ))}
      </ul>
    </ThemeSection>
  );
};

export default VehicleSection;
