export interface OwnerChip {
  name: string;
  avatar?: string;
  user?: boolean;
}

export interface IAvatarContainer {
  randomColor?: number;
  user?: boolean;
}

export interface IUserChipContainer {
  whiteText?: boolean;
}

export type IUserChipProps = OwnerChip & IUserChipContainer;
