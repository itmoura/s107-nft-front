import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
  useRef,
} from "react";
import { AuthProvider } from "../contexts/authContext";
import { NftProvider } from "../contexts/nfts";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <NftProvider>
        <AuthProvider>{children}</AuthProvider>
      </NftProvider>
    </>
  );
};
