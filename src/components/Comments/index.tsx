import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import CommentCard from "./CommentCard";

import { api } from "../../service/api";
import { CommentContext } from "../../contexts/CommentProvider";
import { ContainerComments } from "./style";

const Comments = () => {
  const { comments, setComments } = useContext(CommentContext);
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/comments/${id}`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerComments>
      <h3>Comentarios</h3>
      <ul>
        {comments.length > 0 ? (
          comments.map((comment) => <CommentCard key={comment.id} {...comment} />)
        ) : (
          <p>O Produto ainda não possui nenhum comentário, seja o primeiro(a) a comentar</p>
        )}
      </ul>
    </ContainerComments>
  );
};

export default Comments;
