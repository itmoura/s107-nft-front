import Image from "next/image";
import Link from "next/link";
import Ethereum from "../assets/Ethereum_black.svg";
import { useAuth } from "../contexts/authContext";
import { useNft } from "../contexts/nfts";
import { buyNft, editStatusNft, Nft, updateNft } from "../services/nfts";
import { toast } from "react-toastify";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { DialogEditNftPrice } from "./dialogEditNftPrice";
import { useState } from "react";

interface NftCardProps {
  nft: Nft;
  myNft?: boolean;
}

export const NftCard = ({ nft, myNft = false }: NftCardProps) => {
  const { getNftsRequest } = useNft();
  const { user, handleOpenMenuLogin, getMyNfts, initializeAuth } = useAuth();
  const [isDialogEditNftPriceOpen, setIsDialogEditNftPriceOpen] =
    useState(false);
  const [selectedNft, setSelectedNft] = useState<Nft>();

  const buyNftRequest = async () => {
    try {
      await buyNft(nft.nftId);
      await getNftsRequest();
      await initializeAuth();
      toast.success("NFT comprado com sucesso!");
    } catch (error) {
      toast.error(
        "Verifique se você tem saldo suficiente para comprar este NFT"
      );
    }
  };

  const handleForSale = async () => {
    try {
      await editStatusNft(nft.nftId, "FOR_SALE");
      await getNftsRequest();
      await getMyNfts();
      toast.success("NFT alterado para venda com sucesso!");
    } catch (error) {
      toast.error("Erro ao colocar NFT para venda");
    }
  };

  const handleRemoveFromSale = async () => {
    try {
      await editStatusNft(nft.nftId, "SOLD");
      await getNftsRequest();
      await getMyNfts();
      toast.success("NFT removido da venda com sucesso!");
    } catch (error) {
      toast.error("Erro ao remover NFT da venda");
    }
  };

  return (
    <>
      <div className="flex h-[400px] w-[250px] flex-col rounded-tr-lg rounded-bl-lg bg-card p-4">
        <img
          className="h-[160px] rounded-tr-lg rounded-bl-lg bg-black"
          src={nft.link_image}
        />

        <div className="flex flex-1 flex-col py-4">
          <span className="font-bold">{nft.name}</span>
          <div className="flex w-full items-center">
            <span>{nft.price} Eth</span>
            <Image src={Ethereum} alt="ethereum" width={16} height={16} />
            {myNft && nft.status !== "FOR_SALE" && (
              <IconButton
                aria-label="edit"
                className="ml-auto"
                onClick={() => {
                  setSelectedNft(nft);
                  setIsDialogEditNftPriceOpen(true);
                }}
              >
                <EditIcon fontSize="small" />
              </IconButton>
            )}
          </div>
        </div>

        <div className="align-end flex w-full justify-center">
          {(!nft.status || nft.status === "FOR_SALE") &&
            !myNft &&
            nft.ownerId !== user?.userId && (
              <div
                className="inline-block cursor-pointer rounded-sm bg-secondary py-2 px-4 font-semibold text-white transition duration-300 ease-in-out hover:bg-primary"
                onClick={() => {
                  if (!user) {
                    return handleOpenMenuLogin();
                  }
                  buyNftRequest();
                }}
              >
                <a>Comprar</a>
              </div>
            )}

          {nft.status === "FOR_SALE" && myNft && (
            <div
              className="inline-block cursor-pointer rounded-sm bg-secondary py-2 px-4 font-semibold text-white transition duration-300 ease-in-out hover:bg-primary"
              onClick={() => {
                handleRemoveFromSale();
              }}
            >
              <a>Retirar da venda</a>
            </div>
          )}

          <div className="flex flex-col items-center gap-3">
            {myNft && nft.status === "SOLD" && (
              <div
                className="inline-block cursor-pointer rounded-sm bg-secondary py-2 px-4 font-semibold text-white transition duration-300 ease-in-out hover:bg-primary"
                onClick={handleForSale}
              >
                <a>Colocar para venda</a>
              </div>
            )}

            {nft.status === "SOLD" && (
              <div className="inline-block rounded-sm bg-secondary py-2 px-4 font-semibold text-white transition duration-300 ease-in-out">
                <a>{myNft ? "Sua NFT" : "Sold"}</a>
              </div>
            )}

            {myNft &&
              nft.ownerId === user?.userId &&
              nft.status !== "FOR_SALE" && (
                <div
                  className="inline-block cursor-pointer rounded-sm bg-secondary py-2 px-4 font-semibold text-white transition duration-300 ease-in-out hover:bg-primary"
                  onClick={handleForSale}
                >
                  <a>Colocar para venda</a>
                </div>
              )}
          </div>
        </div>
      </div>
      <DialogEditNftPrice
        open={isDialogEditNftPriceOpen}
        handleClose={() => setIsDialogEditNftPriceOpen(false)}
        nft={selectedNft}
      />
    </>
  );
};
