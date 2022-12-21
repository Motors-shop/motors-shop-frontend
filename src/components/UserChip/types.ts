export interface OwnerChip {
  name: string;
  avatar?: string;
}

export interface IAvatarContainer {
  randomColor?: number;
}

export interface IUserChipContainer {
  whiteText?: boolean;
}

export type IUserChipProps = OwnerChip & IUserChipContainer;
