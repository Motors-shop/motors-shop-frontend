import { ThemeInput } from "./style";
import { IInputProps } from "./type";

const Input = ({ label, placeholder, type, cols, rows, name, id }: IInputProps) => {
  return (
    <ThemeInput>
      {label && <p>{label}</p>}
      {type !== "textarea" ? (
        <input type={type ? type : "text"} id={id} name={name} placeholder={placeholder} />
      ) : (
        <textarea
          name={name}
          id={id}
          cols={cols ? cols : 25}
          rows={rows ? rows : 5}
          placeholder={placeholder}
        ></textarea>
      )}
    </ThemeInput>
  );
};

export default Input;
