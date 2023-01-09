import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CommentContext } from "../../../../contexts/CommentProvider";
import { UserContext } from "../../../../contexts/UserProvider";
import { api } from "../../../../service/api";
import { StyledHorizontalDisplay } from "../../../EditAddress/style";
import EditCommentary from "../../../EditCommentary";
import FeedbackMenssage from "../../../FeedbackMenssage";
import Modal, { useModalControls } from "../../../Modal";
import ThemeButton from "../../../ThemeButton";
import { IProductCommentProps } from "../../types";

const CommentCardModals = ({ ...commentData }: IProductCommentProps) => {
  const { openModal, closeModal } = useModalControls();
  const { token } = useContext(UserContext);
  const { setComments } = useContext(CommentContext);
  const { id } = useParams();

  const removeComment = () => {
    api
      .delete(`/comments/${commentData.id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => api.get(`/comments/${id}`).then((res) => setComments(res.data)))
      .catch(() => openModal(`deleteCommentError-${commentData.id}`));
  };

  return (
    <>
      <Modal name={`editComment-${commentData.id}`} title="Editar comentáio">
        <EditCommentary {...commentData} />
      </Modal>

      <FeedbackMenssage
        name={`deleteComment-${commentData.id}`}
        title="Excluir Comentário"
        menssage="Tem certeza que deseja remover este comentário?
        "
      >
        <StyledHorizontalDisplay style={{ justifyContent: "flex-end" }}>
          <ThemeButton variant="negative" onClick={() => closeModal()}>
            Cancelar
          </ThemeButton>
          <ThemeButton variant="alert" onClick={removeComment}>
            Sim, excluir anúncio
          </ThemeButton>
        </StyledHorizontalDisplay>
      </FeedbackMenssage>

      <FeedbackMenssage
        name={`deleteCommentError-${commentData.id}`}
        title="Ops! Algo deu errado."
        menssage="Ocorreu um erro ao tentar remover seu comentário, por favor tente novamente mais tarde"
      />

      <FeedbackMenssage
        name={`updateCommentSuccess-${commentData.id}`}
        title="Comentário atualizado."
        menssage="Seu comentário foi atualizado com sucesso."
      />

      <FeedbackMenssage
        name={`updateCommentError-${commentData.id}`}
        title="Ops! Algo deu errado."
        menssage="Ocorreu um erro ao tentar atualizar seu comentário, por favor tente novamente mais tarde"
      />
    </>
  );
};

export default CommentCardModals;
