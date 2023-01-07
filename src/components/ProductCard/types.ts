import { LinkProps } from "react-router-dom";
import { IProductData } from "../EditVehicle/type";

import { OwnerChip } from "../UserChip/types";

export interface IOwnerBadge {
  isPublished?: boolean;
}

export interface IProductCardProps extends LinkProps, IOwnerBadge {
  title: string;
  description: string;
  tags?: string[];
  price: number;
  coverImage: string;
  owner: OwnerChip;
  isOwner?: boolean;
  vehicleData: IProductData;
}
