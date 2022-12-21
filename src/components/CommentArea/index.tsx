import Input from "../Input";
import ThemeButton from "../ThemeButton";
import { ContainerComment } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CommentArea = () => {
  const [canSend, setCanSend] = useState<boolean>(true);
  const token = localStorage.getItem("@motorsShop:token");
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    comment: yup.string().required("Digite algum texto para comentar"),
  });

  const { register, handleSubmit, watch } = useForm({ resolver: yupResolver(formSchema) });

  const verifyComment = () => {
    if (watch("comment").length >= 3) {
      setCanSend(false);
    } else {
      setCanSend(true);
    }
  };

  const onSubmitFunction = (data: object) => {
    if (!token) {
      return navigate("/login");
    }
    console.log(data); // Requisição
  };

  return (
    <ContainerComment>
      <p>
        <span>SL</span> Samuel Leão
      </p>
      <form onChange={verifyComment} onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          type="textarea"
          name="comment"
          register={register}
          placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
        />
        <ThemeButton variant="primary" disabled={canSend} type="submit">
          Comentar
        </ThemeButton>
      </form>
      <div>
        <span>Gostei muito!</span>
        <span>Incrível</span>
        <span>Recomendável para amigos!</span>
      </div>
    </ContainerComment>
  );
};

export default CommentArea;
