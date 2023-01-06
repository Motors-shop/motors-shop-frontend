import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import ProductAuctionCard from "../ProductAuctionCard";
import ProductCard from "../ProductCard";

import { ThemeSection } from "./style";
import { IVehicleSectionProps } from "./types";

const VehicleSection = ({ data, title, type, id }: IVehicleSectionProps) => {
  const carousel: any = useRef();
  const [width, setWidth] = useState<number>(0);

  const { user_id } = useParams();
  useEffect(() => {
    setWidth(carousel?.current.scrollWidth - carousel?.current.offsetWidth);
  }, [data]);

  return (
    <ThemeSection id={id}>
      <h2>{title}</h2>
      <motion.ul ref={carousel} whileTap={{ cursor: "grabbing" }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileDrag={{ pointerEvents: "none" }}
        >
          {data.map((vehicle) => (
            <li key={vehicle.id}>
              {type === "products" && (
                <ProductCard
                  vehicleId={vehicle.id}
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
        </motion.div>
      </motion.ul>
    </ThemeSection>
  );
};

export default VehicleSection;
