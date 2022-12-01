import { useEffect, useState } from "react";
import { getNftsByCollectionId, Nft, NftCollection } from "../services/nfts";
import { useRouter } from "next/router";

interface CollectionCardProps {
  collection: NftCollection;
}

export const CollectionCard = ({ collection }: CollectionCardProps) => {
  const router = useRouter();
  const [nfts, setNfts] = useState<Nft[]>([]);
  const getNftsRequest = async () => {
    const response = await getNftsByCollectionId(collection.collectionId);
    setNfts(response.content);
  };
  useEffect(() => {
    getNftsRequest();
  }, []);
  return (
    <div
      className="flex min-w-[250px] cursor-pointer flex-col rounded-tl-lg rounded-br-lg bg-secondary
        p-4 transition duration-300 ease-in-out hover:scale-105
      "
      onClick={() => router.push(`/collection/${collection.collectionId}`)}
    >
      {nfts.length > 0 && (
        <img
          src={nfts[0].link_image}
          className="h-[150px] w-[230px] rounded-tl-lg rounded-br-lg"
        />
      )}

      {nfts.length === 0 && (
        <div className="h-[150px] w-[230px] rounded-tl-lg rounded-br-lg bg-black p-4">
          <span className="text-white">Não tem NFT ainda :c</span>
        </div>
      )}
      <div className="flex flex-1 flex-col py-4">
        <span className="font-bold text-white">{collection.name}</span>
      </div>
    </div>
  );
};
