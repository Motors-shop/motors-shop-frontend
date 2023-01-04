import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../service/api";
import { IUserData } from "./types";

interface IProviderProps {
  children: ReactNode;
}

interface IUserProviderData {
  user: IUserData;
  setUser: (e: IUserData) => void;
  token: string;
}

export const UserContext = createContext<IUserProviderData>({} as IUserProviderData);

const UserProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUserData>({} as IUserData);
  const token: string = localStorage.getItem("@motorsShop:token") || "";

  useEffect(() => {
    api
      .get("users/profile", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setUser(res.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UserContext.Provider value={{ user, setUser, token }}>{children}</UserContext.Provider>;
};

export default UserProvider;
