import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../Input";
import ThemeButton from "../ThemeButton";
import UserChip from "../UserChip";

import { api } from "../../service/api";
import { ContainerComment } from "./style";
import { CommentContext } from "../../contexts/CommentProvider";
import { UserContext } from "../../contexts/UserProvider";
import { ICommentAreaProps } from "./types";
import { useModalControls } from "../Modal";
import FeedbackMenssage from "../FeedbackMenssage";

const NewCommentArea = ({ productOwnerId }: ICommentAreaProps) => {
  const [canSend, setCanSend] = useState<boolean>(false);
  const { user, token, loadingUser } = useContext(UserContext);
  const { setComments } = useContext(CommentContext);
  const { openModal } = useModalControls();

  const navigate = useNavigate();
  const { id } = useParams();

  const formSchema = yup.object().shape({
    commentary: yup.string().required("Digite algum texto para comentar"),
  });

  const { register, handleSubmit, watch, resetField, setValue } = useForm({
    resolver: yupResolver(formSchema),
  });

  const verifyComment = () => {
    if (watch("commentary").length >= 3) {
      setCanSend(true);
    } else {
      setCanSend(false);
    }
  };

  const onSubmitFunction = (data: object) => {
    if (!token) {
      return navigate("/login");
    }

    api
      .post(`/comments/${id}`, data, { headers: { Authorization: `Bearer ${token}` } })
      .then((_) => {
        resetField("commentary");
        setCanSend(false);

        api.get(`/comments/${id}`).then((res) => setComments(res.data));
      })
      .catch((_) => {
        if (productOwnerId === user.id) {
          openModal("ownerCommentError");
        } else {
          openModal("userCommentError");
        }
      });
  };

  const addSuggestion = (e: React.MouseEvent<HTMLSpanElement>) => {
    const suggestion = e.currentTarget.innerText;
    setValue("commentary", suggestion);
    setCanSend(true);
  };

  return (
    <>
      <FeedbackMenssage
        name="ownerCommentError"
        title="Aviso"
        menssage="Voçê não pode deixar um comentário no próprio produto"
      />
      <FeedbackMenssage
        name="userCommentError"
        title="Aviso"
        menssage="Você já deixou seu comentário nesse produto"
      />
      <ContainerComment>
        {!loadingUser && <UserChip name={user.name} user />}

        <form onChange={verifyComment} onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            type="textarea"
            name="commentary"
            register={register}
            maxLength={500}
            placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
          />
          <ThemeButton variant="primary" disabled={!canSend} type="submit">
            Comentar
          </ThemeButton>
        </form>
        <div className="recommendations">
          <span onClick={(e) => addSuggestion(e)}>Gostei muito!</span>
          <span onClick={(e) => addSuggestion(e)}>Incrível</span>
          <span onClick={(e) => addSuggestion(e)}>Recomendável para amigos!</span>
        </div>
      </ContainerComment>
    </>
  );
};

export default NewCommentArea;
