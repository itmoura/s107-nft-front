import Head from "next/head";
import { NftCard } from "../../components/nftCard";
import { Page } from "../../components/page";
import { useAuth } from "../../contexts/authContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getNftsByCollectionId, Nft } from "../../services/nfts";
import { useState } from "react";

export default function MyNfts() {
  const router = useRouter();

  const [nfts, setNfts] = useState<Nft[]>([]);
  const getNftsRequest = async () => {
    if (router.query.id) {
      const response = await getNftsByCollectionId(router.query.id as string);
      setNfts(response.content);
    }
  };
  useEffect(() => {
    getNftsRequest();
  }, []);
  return (
    <>
      <Head>
        <title>OmNaNFT - Coleção</title>
      </Head>
      <Page>
        <div className="p-10">
          <h4 className="my-6 text-xl font-bold text-white">Coleção</h4>
          <div className="grid grid-cols-4 gap-4">
            {nfts.map((nft) => (
              <NftCard key={nft.nftId} nft={nft} />
            ))}
          </div>
        </div>
      </Page>
    </>
  );
}
