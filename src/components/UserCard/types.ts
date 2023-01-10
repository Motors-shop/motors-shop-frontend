export interface IUserCardData {
  id: string;
  name: string;
  biography: string;
}

export interface IUSerCardProps {
  product?: boolean;
  profile?: boolean;
  data: IUserCardData;
}

export interface IThemeUserCardProps {
  type: string;
}
