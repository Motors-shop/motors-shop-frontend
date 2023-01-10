export interface IRecoveryFormProps {
  nextStep: () => void;
  prevStep: () => void;
}

export interface IGetCodeProps extends IRecoveryFormProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export interface IValidateCodeProps extends IRecoveryFormProps {
  email: string;
}
