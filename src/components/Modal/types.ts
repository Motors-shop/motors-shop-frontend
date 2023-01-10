export interface IModalProps {
  name: string;
  title: string;
  feedback?: boolean;

  actions?: JSX.Element[];
  closeable?: boolean;
  closeOnEsc?: boolean;
  closeOnOutsideClick?: boolean;
  supressCloseableModalWarning?: boolean;
}

export interface IModalStyledProps {
  feedBack: boolean;
}
