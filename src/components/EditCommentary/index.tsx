import { IProductCommentProps } from "../Comments/types";
import Input from "../Input";
import ThemeButton from "../ThemeButton";
import { ThemeButtonContainer, ThemeEditComment } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect, useState } from "react";
import { api } from "../../service/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserProvider";
import { CommentContext } from "../../contexts/CommentProvider";
import { useModalControls } from "../Modal";

const EditCommentary = ({ id, commentary }: IProductCommentProps) => {
  const [canSend, setCanSend] = useState<boolean>(false);
  const { token } = useContext(UserContext);
  const { setComments } = useContext(CommentContext);
  const { openModal, closeModal } = useModalControls();
  const vehicleId = useParams().id;

  const formSchema = yup.object().shape({
    commentary: yup.string().required("Digite algum texto para comentar"),
  });

  const { register, handleSubmit, watch, resetField, setValue } = useForm({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    setValue("commentary", commentary);
    setCanSend(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const verifyComment = () => {
    if (watch("commentary").length >= 3) {
      setCanSend(true);
    } else {
      setCanSend(false);
    }
  };

  const onSubmitFunction = (data: object) => {
    api
      .patch(`/comments/${id}`, data, { headers: { Authorization: `Bearer ${token}` } })
      .then((_) => {
        resetField("commentary");
        setCanSend(false);
        openModal(`updateCommentSuccess-${id}`);

        api.get(`/comments/${vehicleId}`).then((res) => setComments(res.data));
      })
      .catch((_) => openModal(`updateCommentError-${id}`));
  };

  return (
    <>
      <ThemeEditComment>
        <form onChange={verifyComment} onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            type="textarea"
            name="commentary"
            register={register}
            maxLength={500}
            placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
          />
          <ThemeButtonContainer>
            <ThemeButton variant="negative" type="submit" onClick={() => closeModal()}>
              Cancelar
            </ThemeButton>
            <ThemeButton variant="sucess" disabled={!canSend} type="submit">
              Salvar
            </ThemeButton>
          </ThemeButtonContainer>
        </form>
      </ThemeEditComment>
    </>
  );
};

export default EditCommentary;
