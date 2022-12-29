import { createContext, ReactNode, useState } from "react";
import { IProductCommentProps } from "../pages/Product/Comments/types";

interface IProviderProps {
  children: ReactNode;
}

interface ICommentProviderData {
  comments: IProductCommentProps[];
  setComments: (e: IProductCommentProps[]) => void;
}

export const CommentContext = createContext<ICommentProviderData>({} as ICommentProviderData);

const CommentProvider = ({ children }: IProviderProps) => {
  const [comments, setComments] = useState<IProductCommentProps[]>([]);

  return (
    <CommentContext.Provider value={{ comments, setComments }}>{children}</CommentContext.Provider>
  );
};

export default CommentProvider;
