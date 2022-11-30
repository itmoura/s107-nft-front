import Image from "next/image";
import Link from "next/link";
import Ethereum from "../assets/Ethereum_black.svg";

export const NftCard = () => {
  return (
    <div className="flex h-[400px] min-w-[250px] flex-col rounded-tr-lg rounded-bl-lg bg-card p-4">
      <div className="h-[160px] rounded-tr-lg rounded-bl-lg bg-black">alo</div>
      <div className="flex flex-1 flex-col py-4">
        <span className="font-bold">Nome da NFT</span>
        <div className="flex">
          <span>2 Eth</span>
          <Image src={Ethereum} alt="ethereum" width={16} height={16} />
        </div>
      </div>
      <div className="align-end flex w-full justify-center">
        <Link href="/dashboard" passHref legacyBehavior>
          <div className="inline-block cursor-pointer rounded-sm bg-secondary py-2 px-4 font-semibold text-white transition duration-300 ease-in-out hover:bg-primary">
            <a>Comprar</a>
          </div>
        </Link>
      </div>
    </div>
  );
};
