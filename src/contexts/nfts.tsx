import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
  useRef,
} from "react";
import { login, loginProps, me, User } from "../services/user";

import api from "../services/api";
import { toast } from "react-toastify";
import {
  getNftCollections,
  getNfts,
  Nft,
  NftCollection,
} from "../services/nfts";

interface NftContextData {
  nfts: Nft[];
  getNftsRequest: () => Promise<void>;
  filterNfts: (filter: string) => void;
  collections: NftCollection[];
}

export const NftContext = createContext({} as NftContextData);

interface NftProviderProps {
  children: ReactNode;
}

export function NftProvider({ children }: NftProviderProps) {
  const [nfts, setNfts] = useState<Nft[]>([]);
  const [collections, setCollections] = useState<NftCollection[]>([]);
  const [filteredNfts, setFilteredNfts] = useState<Nft[]>([]);
  const initialRender = useRef(true);

  const getNftsRequest = async () => {
    try {
      const response = await getNfts();
      setNfts(response.content);
    } catch (error) {
      toast.error("Erro ao buscar NFTs, verifique sua conexão");
    }
  };

  const filterNfts = (search: string) => {
    const filtered = nfts.filter((nft) => {
      return nft.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredNfts(filtered);
  };

  const getNftCollectionsRequest = async () => {
    try {
      const response = await getNftCollections();
      setCollections(response.content);
    } catch (error) {
      toast.error("Erro ao buscar coleções, verifique sua conexão");
    }
  };

  useEffect(() => {
    if (!initialRender.current) {
      return;
    }

    initialRender.current = false;
    getNftCollectionsRequest();
    getNftsRequest();
  }, []);

  return (
    <NftContext.Provider
      value={{
        nfts: filteredNfts.length > 0 ? filteredNfts : nfts,
        getNftsRequest,
        filterNfts,
        collections,
      }}
    >
      {children}
    </NftContext.Provider>
  );
}

export function useNft() {
  return useContext(NftContext);
}
