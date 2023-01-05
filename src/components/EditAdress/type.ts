export interface IEditAdress {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

export interface IValidData {
  [fields: string]: string;
}
