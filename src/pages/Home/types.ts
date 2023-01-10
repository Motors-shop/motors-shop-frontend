import { IUserData } from "../../contexts/types";

interface IPhotoProps {
  id: string;
  url: string;
  createdAt: string;
}

interface ICommentProps {
  id: string;
  commentary: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProductData {
  id: string;
  sellType: string;
  title: string;
  description: string;
  year: string;
  km: string;
  price: string;
  type: string;
  isPublished: boolean;
  owner: IUserData;
  capeImage: string;
  createdAt: string;
  updatedAt: string;
  photos: IPhotoProps[];
  comments: ICommentProps[];
}
