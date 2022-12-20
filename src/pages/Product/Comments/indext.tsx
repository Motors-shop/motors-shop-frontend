import CommentCard from "../../../components/CommentCard";
import { ContainerComments } from "./style";

const Comments = () => {
  return (
    <ContainerComments>
      <h3>Comentarios</h3>
      <ul>
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </ul>
    </ContainerComments>
  );
};

export default Comments;
