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
  km: number;
  price: string;
  type: string;
  isPublished: boolean;
  capeImage: string;
  createdAt: string;
  updatedAt: string;
  photos: IPhotoProps[];
  comments: ICommentProps[];
}
