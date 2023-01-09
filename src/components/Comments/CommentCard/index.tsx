import { useContext } from "react";
import { UserContext } from "../../../contexts/UserProvider";
import ThemeButton from "../../ThemeButton";
import UserChip from "../../UserChip";

import { IProductCommentProps } from "../types";
import { ThemeButtonContainer, ThemeCard, ThemeCommentContainer } from "./style";

import { FiEdit, FiTrash } from "react-icons/fi";
import { useModalControls } from "../../Modal";
import CommentCardModals from "./commentCardModals";

const CommentCard = ({ ...commentData }: IProductCommentProps) => {
  const userData = useContext(UserContext).user;
  const { openModal } = useModalControls();

  const time = new Date().getTime() - new Date(commentData.updatedAt).getTime();
  const seconds = Math.floor(time / 1000);
  const minutes = Math.floor(time / 60000);
  const hours = Math.floor(time / 3.6e6);
  const days = Math.floor(time / 8.64e7);
  const months = Math.floor(time / 2.628e9);
  const years = Math.floor(time / 3.154e10);

  return (
    <>
      <CommentCardModals {...commentData} />

      <ThemeCard>
        <div>
          <UserChip
            name={commentData.user.name}
            user={userData.id === commentData.user.id ? true : false}
          />
          {seconds < 60 && (
            <span>
              há {seconds} {seconds === 1 ? "segundo" : "segundos"}
            </span>
          )}
          {minutes < 60 && minutes !== 0 && (
            <span>
              há {minutes} {minutes === 1 ? "minuto" : "minutos"}
            </span>
          )}
          {minutes > 60 && hours < 24 && (
            <span>
              há {hours} {hours === 1 ? "hora" : "horas"}
            </span>
          )}
          {hours >= 24 && months === 0 && (
            <span>
              há {days} {days === 1 ? "dia" : "dias"}
            </span>
          )}
          {months > 0 && years === 0 && (
            <span>
              há {months} {months === 1 ? "mês" : "meses"}
            </span>
          )}
          {years > 0 && (
            <span>
              há {years} {years === 1 ? "ano" : "anos"}
            </span>
          )}
        </div>
        <ThemeCommentContainer>
          <p>{commentData.commentary}</p>

          {userData.id === commentData.user.id && (
            <ThemeButtonContainer>
              <ThemeButton
                variant="primary"
                outlined
                onClick={() => openModal(`editComment-${commentData.id}`)}
              >
                <FiEdit />
              </ThemeButton>

              <ThemeButton
                variant="primary"
                outlined
                onClick={() => openModal(`deleteComment-${commentData.id}`)}
              >
                <FiTrash />
              </ThemeButton>
            </ThemeButtonContainer>
          )}
        </ThemeCommentContainer>
      </ThemeCard>
    </>
  );
};

export default CommentCard;
