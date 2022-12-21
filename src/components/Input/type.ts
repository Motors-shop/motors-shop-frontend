interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  rows?: number;
  cols?: number;
  error?: string;
  register: Function;
  [rest: string]: any;
}

export type { IInputProps };
