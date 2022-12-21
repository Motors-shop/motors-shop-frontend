import { LinkProps } from "react-router-dom";

import { OwnerChip } from "../UserChip/types";

export interface IProductAuctionProps extends LinkProps {
  coverImage: string;
  title: string;
  description: string;
  owner: OwnerChip;
  tags?: string[];
  price: number;
  dueDate: Date;
}
