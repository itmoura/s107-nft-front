import Image from "next/image";
import Ethereum from "../assets/Ethereum.svg";

export const SaleCard = () => {
  return (
    <div className="flex justify-center gap-2 p-4 align-middle">
      <div className="h-14 w-14 rounded-full bg-slate-100"></div>
      <div className="flex flex-col justify-center align-middle text-white">
        <span className="font-bold">NFT#2312</span>
        <div className="flex">
          <span>2 Eth</span>
          <Image src={Ethereum} alt="ethereum" width={16} height={16} />
        </div>
      </div>
    </div>
  );
};
