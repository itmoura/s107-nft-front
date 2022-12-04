import Head from "next/head";
import { NftCard } from "../components/nftCard";
import { Page } from "../components/page";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";

export default function MyNfts() {
  const { myNfts, getMyNfts, user } = useAuth();
  useEffect(() => {
    if (user) getMyNfts();
  }, [user]);
  return (
    <>
      <Head>
        <title>OmNaNFT - Minhas NFT&apos;s</title>
      </Head>
      <Page>
        <div className="p-10">
          <h4 className="my-6 text-xl font-bold text-white">Minhas NFTS</h4>
          <div className="grid grid-cols-4 gap-4">
            {myNfts.map((nft) => (
              <NftCard key={nft.nftId} nft={nft} myNft />
            ))}
          </div>
        </div>
      </Page>
    </>
  );
}
