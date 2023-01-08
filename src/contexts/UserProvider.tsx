import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
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
  const [tokenCheck, setTokenCheck] = useState<boolean>(true);

  const parseJwt = (token: string) => {
    const decode = JSON.parse(atob(token.split(".")[1]));
    if (decode.exp * 1000 < new Date().getTime()) {
      localStorage.clear();
      toast.warning("sessão expirada");

      setTimeout(() => {
        toast.warning("redirecionando para a página de login");

        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      }, 2000);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (token !== "") {
        parseJwt(token);
      }
      setTokenCheck(!tokenCheck);
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenCheck]);

  useEffect(() => {
    api
      .get("users/profile", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setUser(res.data);
        setLoadingUser(false);
      })
      .catch(() => localStorage.clear());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, token, loadingUser, setLoadingUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
