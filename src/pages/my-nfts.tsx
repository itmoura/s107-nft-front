import Head from "next/head";
import { NftCard } from "../components/nftCard";
import { Page } from "../components/page";

export default function MyNfts() {
  return (
    <>
      <Head>
        <title>OmNaNFT - Minhas NFT's</title>
      </Head>
      <Page>
        <div className="p-10">
          <h4 className="my-6 text-xl font-bold text-white">Minhas NFTS</h4>
          <div className="grid grid-cols-4 gap-4">
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
          </div>
        </div>
      </Page>
    </>
  );
}
