import { ThemeInput } from "./style";
import { IInputProps } from "./type";

const Input = ({
  label,
  placeholder,
  type,
  cols,
  rows,
  name,
  id,
  error,
  register,
  ...rest
}: IInputProps) => {
  return (
    <ThemeInput>
      {label && (
        <p>
          {label} {!!error && <span> - {error}</span>}
        </p>
      )}
      {type !== "textarea" ? (
        <input
          type={type ? type : "text"}
          id={id}
          name={name}
          placeholder={placeholder}
          {...register(name)}
          {...rest}
        />
      ) : (
        <textarea
          name={name}
          id={id}
          cols={cols ? cols : 25}
          rows={rows ? rows : 5}
          placeholder={placeholder}
          {...register(name)}
          {...rest}
        ></textarea>
      )}
    </ThemeInput>
  );
};

export default Input;
