export interface IModalProps {
  name: string;
  title: string;

  actions?: JSX.Element[];
  closeable?: boolean;
  closeOnEsc?: boolean;
  closeOnOutsideClick?: boolean;
  supressCloseableModalWarning?: boolean;
}
