import { useContext } from "react";
import { UserContext } from "../../../contexts/UserProvider";
import UserChip from "../../UserChip";

import { IProductCommentProps } from "../types";
import { ThemeCard } from "./style";

const CommentCard = ({ user, commentary, createdAt }: IProductCommentProps) => {
  const userData = useContext(UserContext).user;

  const time = new Date().getTime() - new Date(createdAt).getTime();
  const seconds = Math.floor(time / 1000);
  const minutes = Math.floor(time / 60000);
  const hours = Math.floor(time / 3.6e6);
  const days = Math.floor(time / 8.64e7);
  const months = Math.floor(time / 2.628e9);
  const years = Math.floor(time / 3.154e10);

  return (
    <ThemeCard>
      <div>
        <UserChip name={user.name} user={userData.id === user.id ? true : false} />
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
      <p>{commentary}</p>
    </ThemeCard>
  );
};

export default CommentCard;
