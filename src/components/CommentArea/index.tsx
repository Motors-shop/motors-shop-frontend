import Input from "../Input";
import ThemeButton from "../ThemeButton";
import { ContainerComment } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const CommentArea = () => {
  const formSchema = yup.object().shape({
    comment: yup.string().required("Digite algum texto para comentar"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data: object) => {
    console.log(data); // Requisição
  };

  return (
    <ContainerComment>
      <div>
        <p>
          <span>SL</span> Samuel Leão
        </p>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input type="textarea" name="comment" register={register} />
          <ThemeButton variant="primary" type="submit">Comentar</ThemeButton>
          {errors.comment && (
            <span>
              {
                // errors.comment.message
              }
            </span>
          )}
        </form>
        <div>
          <span>Gostei muito!</span>
          <span>Incrível</span>
          <span>Recomendável para amigos!</span>
        </div>
      </div>
    </ContainerComment>
  );
};

export default CommentArea;
