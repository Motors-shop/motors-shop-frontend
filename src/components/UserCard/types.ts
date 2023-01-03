export interface IUserCardData {
  id: string;
  name: string;
  biography: string;
}

export interface IUSerCardProps {
  product?: boolean;
  profile?: boolean;
  admin?: boolean;
  data: IUserCardData;
}

export interface IThemeUserCardProps {
  type: string;
}
