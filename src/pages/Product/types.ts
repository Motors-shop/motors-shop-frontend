import { ICommentProps } from "../../components/Comments/types";
import { IUserData } from "../../contexts/types";

export interface IPhotoProps {
  id: string;
  url: string;
  updatedAt: string;
}

export interface IProductProps {
  id: string;
  sellType: string;
  title: string;
  description: string;
  year: string;
  km: number;
  price: number;
  type: string;
  owner: IUserData;
  isPublished: boolean;
  capeImage: string;
  createdAt: string;
  updatedAt: string;
  photos: IPhotoProps[];
  comments: ICommentProps[];
}

export interface IProductInfoProps {
  data: IProductProps;
}
