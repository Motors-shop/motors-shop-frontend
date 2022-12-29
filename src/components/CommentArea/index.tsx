import Input from "../Input";
import ThemeButton from "../ThemeButton";
import { ContainerComment } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserChip from "../UserChip";
import { api } from "../../service/api";
import { CommentContext } from "../../contexts/CommentProvider";

const CommentArea = () => {
  const [canSend, setCanSend] = useState<boolean>(true);
  const token = localStorage.getItem("@motorsShop:token");
  const { setComments } = useContext(CommentContext);

  const navigate = useNavigate();
  const { id } = useParams();

  const formSchema = yup.object().shape({
    commentary: yup.string().required("Digite algum texto para comentar"),
  });

  const { register, handleSubmit, watch, resetField } = useForm({
    resolver: yupResolver(formSchema),
  });

  const verifyComment = () => {
    if (watch("commentary").length >= 3) {
      setCanSend(false);
    } else {
      setCanSend(true);
    }
  };

  const onSubmitFunction = (data: object) => {
    if (!token) {
      return navigate("/login");
    }

    api
      .post(`/comments/${id}`, data)
      .then((_) => {
        resetField("commentary");

        api.get(`/comments/${id}`).then((res) => setComments(res.data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <ContainerComment>
      <UserChip name="Samuel Leão" user />

      <form onChange={verifyComment} onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          type="textarea"
          name="commentary"
          register={register}
          placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
        />
        <ThemeButton variant="primary" disabled={canSend} type="submit">
          Comentar
        </ThemeButton>
      </form>
      <div className="recommendations">
        <span>Gostei muito!</span>
        <span>Incrível</span>
        <span>Recomendável para amigos!</span>
      </div>
    </ContainerComment>
  );
};

export default CommentArea;
