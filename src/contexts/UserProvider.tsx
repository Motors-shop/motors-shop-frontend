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
  loadingUser: boolean;
  setLoadingUser: (e: boolean) => void;
}

export const UserContext = createContext<IUserProviderData>({} as IUserProviderData);

const UserProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUserData>({} as IUserData);
  const [loadingUser, setLoadingUser] = useState<boolean>(true);
  const token: string = localStorage.getItem("@motorsShop:token") || "";

  useEffect(() => {
    api
      .get("users/profile", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setUser(res.data);
        setLoadingUser(false);
      })
      .catch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, token, loadingUser, setLoadingUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
