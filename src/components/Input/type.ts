interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  rows?: number;
  cols?: number;
  register?: any;
}

export type { IInputProps };
