export interface IProductCommentProps {
  id: string;
  commentary: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    name: string;
  };
}

export interface ICommentProps {
  id: string;
  createdAt: string;
  updatedAt: string;
}
