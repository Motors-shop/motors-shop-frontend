import { IProductData } from "../../pages/Home/types";

type SectionVariants = "products" | "auction";

export interface IVehicleSectionProps {
  title: string;
  data: IProductData[];
  type: SectionVariants;
}
