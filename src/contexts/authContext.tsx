import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import { login, loginProps, me, User } from "../services/user";

import axios from "axios";
import api from "../services/api";
import { getNftsMe, Nft } from "../services/nfts";
import { toast } from "react-toastify";

interface AuthContextData {
  openMenuLogin: boolean;
  handleOpenMenuLogin: () => void;
  handleCloseMenuLogin: () => void;
  handleLogin: (data: loginProps) => Promise<void>;
  user: User | null;
  handleLogout: () => void;
  myNfts: Nft[];
  getMyNfts: () => Promise<void>;
  initializeAuth: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [myNfts, setMyNfts] = useState<Nft[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenuLogin = Boolean(anchorEl);

  const handleOpenMenuLogin = () => {
    setAnchorEl(document.getElementById("login"));
  };

  const handleCloseMenuLogin = () => {
    setAnchorEl(null);
  };

  const handleLogin = async ({ email, password }: loginProps) => {
    try {
      const token = await login({ email, password });
      localStorage.setItem("omnanft-token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const user = await me();
      setUser(user);
    } catch (error) {
      toast.error("Erro ao fazer login, verifique suas credenciais");
    }
  };

  const initializeAuth = async () => {
    const token = localStorage.getItem("omnanft-token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const user = await me();
        setUser(user);
      } catch (error) {
        toast.error("Erro! Verifique sua conexão");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("omnanft-token");
    setUser(null);
  };

  const getMyNfts = async () => {
    const response = await getNftsMe();
    setMyNfts(response);
  };

  useEffect(() => {
    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        openMenuLogin,
        handleOpenMenuLogin,
        handleCloseMenuLogin,
        handleLogin,
        user,
        handleLogout,
        myNfts,
        getMyNfts,
        initializeAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
