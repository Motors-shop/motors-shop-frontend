export interface IEditProfile {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: string;
  biography: string;
}

export interface IValidData {
  [fields: string]: string;
}
