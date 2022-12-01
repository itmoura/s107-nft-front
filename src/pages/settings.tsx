import Head from "next/head";
import { NftCard } from "../components/nftCard";
import { Page } from "../components/page";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";

export default function Settings() {
  return (
    <>
      <Head>
        <title>OmNaNFT - Configurações</title>
      </Head>
      <Page>
        <div className="p-10">
          <h4 className="my-6 text-xl font-bold text-white">Configurações</h4>
          <div className="grid grid-cols-3 gap-4">
            <span className="font-bold text-white">
              Num tem configuração pra ajustar :/
            </span>
          </div>
        </div>
      </Page>
    </>
  );
}
