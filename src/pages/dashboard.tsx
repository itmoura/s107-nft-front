import Head from "next/head";
import { CollectionCard } from "../components/collectionCard";
import { NftCard } from "../components/nftCard";
import { Page } from "../components/page";
import { SaleCard } from "../components/saleCard";
import { useAuth } from "../contexts/authContext";
import { useEffect, useRef, useState } from "react";
import { getNftById, getNfts, Nft } from "../services/nfts";
import { useNft } from "../contexts/nfts";

export default function Dashboard() {
  const { handleOpenMenuLogin } = useAuth();
  const initialRender = useRef(true);

  const { nfts, filterNfts, collections } = useNft();

  return (
    <>
      <Head>
        <title>OmNaNFT - Dashboard</title>
      </Head>
      <Page>
        <div className="box-sizing flex flex-1 justify-between p-10">
          <div className="min-w-[800px] max-w-[900px]">
            <input
              placeholder="Buscar"
              className="w-full rounded-tl-lg rounded-br-lg p-3"
              onChange={(e) => filterNfts(e.target.value)}
            />

            {/* <h4 className="mt-6 text-xl font-bold text-white">
              Ultimas Vendas
            </h4>

            <div className="flex">
              <SaleCard />
              <SaleCard />
              <SaleCard />
              <SaleCard />
            </div> */}

            <h4 className="my-6 text-xl font-bold text-white">NFTS</h4>

            <div className="grid grid-cols-3 gap-4">
              {nfts.map((nft) => (
                <NftCard key={nft.nftId} nft={nft} />
              ))}
            </div>
          </div>
          <div className="flex min-w-[250px] flex-col gap-4 rounded-tl-lg rounded-br-lg bg-card p-3">
            <h4 className="mb-4 text-xl font-bold">Coleções</h4>
            {collections.map((collection) => (
              <CollectionCard
                key={collection.collectionId}
                collection={collection}
              />
            ))}
            {/* <CollectionCard /> */}
          </div>
        </div>
      </Page>
    </>
  );
}
