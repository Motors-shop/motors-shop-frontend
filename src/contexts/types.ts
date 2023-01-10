import { IProductData } from "../pages/Home/types";

export interface IUserAdressData {
  id: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserData {
  id: string;
  name: string;
  biography: string;
  accountType: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: string;
  createdAt: string;
  updatedAt: string;
  address: IUserAdressData;
  vehicles: IProductData[];
}
