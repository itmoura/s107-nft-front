import api from "./api";

export interface NftCollection {
  collectionId: string;
  name: string;
  description: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface Nft {
  nftId: string;
  name: string;
  description: string;
  imageSrc: string;
  price: number;
  typeCoin: string;
  collectionId: string;
  ownerId: string;
  status: string;
  category: string;
  tags: string;
  created_by: Date;
  created_at: Date;
  updated_at: Date;
  link_image: string;
}

interface Pagination {
  totalPages: number;
  size: number;
  totalElements: number;
  number: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
}

interface getNftsResponse extends Pagination {
  content: Nft[];
}

interface getNftCollectionsResponse extends Pagination {
  content: NftCollection[];
}

export const getNfts = async (): Promise<getNftsResponse> => {
  const response = await api.get("/api/v1/nfts");
  return response.data;
};

export const createNft = async (nft: Partial<Nft>): Promise<Nft> => {
  const response = await api.post("/api/v1/nfts", nft);
  return response.data;
};

export const creatNftCollection = async (
  nft: Partial<NftCollection>
): Promise<NftCollection> => {
  const response = await api.post("/api/v1/nfts/collections", nft);
  return response.data;
};

export const getNftCollections =
  async (): Promise<getNftCollectionsResponse> => {
    const response = await api.get("/api/v1/nfts/collections");
    return response.data;
  };

export const getNftById = async (id: string): Promise<Nft> => {
  const response = await api.get(`/api/v1/nfts/${id}`, {
    params: {
      id,
    },
  });
  return response.data;
};

export const getNftsMe = async (): Promise<Nft[]> => {
  const response = await api.get("/api/v1/nfts/me");
  return response.data;
};

export const buyNft = async (id: string): Promise<Nft> => {
  const response = await api.post(`/api/v1/nfts/buy/${id}`, {
    params: {
      id,
    },
  });
  return response.data;
};

export const updateNft = async (
  id: string,
  nft: Partial<Nft>
): Promise<Nft> => {
  const response = await api.put(`/api/v1/nfts/${id}`, nft, {
    params: {
      id,
    },
  });
  return response.data;
};

export const getNftsByCollectionId = async (
  id: string
): Promise<getNftsResponse> => {
  const response = await api.get(`/api/v1/nfts/collections/${id}`, {
    params: {
      id,

      page: 0,
      size: 10,
    },
  });
  return response.data;
};

export const editStatusNft = async (
  id: string,
  status: string
): Promise<Nft> => {
  const response = await api.put(
    `/api/v1/nfts/${id}/status`,
    {},
    {
      params: {
        id,
        status,
      },
    }
  );
  return response.data;
};

export const editPriceNft = async (id: string, price: number): Promise<Nft> => {
  const response = await api.put(
    `/api/v1/nfts/${id}/price`,
    {},
    {
      params: {
        id,
        price,
      },
    }
  );
  return response.data;
};
