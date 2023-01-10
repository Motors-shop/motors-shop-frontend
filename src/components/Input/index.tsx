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
  required,
  ...rest
}: IInputProps) => {
  return (
    <ThemeInput>
      {label && (
        <p style={{ color: error && "var(--alert1)" }}>
          {label} {required && "*"}
          {!!error && !required && (
            <span style={{ color: error && "var(--alert1)" }}> - {error}</span>
          )}
        </p>
      )}
      {type !== "textarea" ? (
        <input
          type={type ? type : "text"}
          id={id}
          name={name}
          placeholder={placeholder}
          style={{ borderColor: error && "var(--alert1)" }}
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
          style={{ borderColor: error && "var(--alert1)" }}
          {...register(name)}
          {...rest}
        ></textarea>
      )}
    </ThemeInput>
  );
};

export default Input;
