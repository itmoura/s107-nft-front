import { ReactNode, useState } from "react";
import { DialogCreateNft } from "./dialogCreateNft";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { DialogCreateNftCollection } from "./dialogCreateNftCollection";

interface PageProps {
  children: ReactNode;
  homepage?: boolean;
}

export const Page = ({ children, homepage = false }: PageProps) => {
  const [openDialogCreateNft, setOpenDialogCreateNft] = useState(false);
  const [openDialogCreateNftCollection, setOpenDialogCreateNftCollection] =
    useState(false);

  return (
    <>
      <Navbar
        openDialogCreateNft={() => setOpenDialogCreateNft(true)}
        openDialogCreateNftCollection={() =>
          setOpenDialogCreateNftCollection(true)
        }
      />
      {!homepage && <Sidebar />}
      <div
        className={`fixed top-[73px] overflow-auto ${!homepage && "left-60"} ${
          !homepage ? "w-[calc(100%-15rem)]" : "w-screen"
        } h-[calc(100%-73px)]  bg-background`}
      >
        {children}
      </div>

      <DialogCreateNft
        open={openDialogCreateNft}
        handleClose={() => setOpenDialogCreateNft(false)}
      />
      <DialogCreateNftCollection
        open={openDialogCreateNftCollection}
        handleClose={() => setOpenDialogCreateNftCollection(false)}
      />
    </>
  );
};
