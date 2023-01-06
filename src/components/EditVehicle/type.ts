interface IPhotoProps {
  id: string;
  url: string;
  createdAt: string;
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
  capeImage: string;
  createdAt: string;
  updatedAt: string;
  photos: IPhotoProps[];
}

export interface IProductIdProps {
  vehicleId: string;
}
