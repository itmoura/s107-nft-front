import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/authContext";
import { MenuLogin } from "./menuLogin";
import { DialogSignup } from "./dialogSignup";

export interface NavbarProps {
  openDialogCreateNft: () => void;
  openDialogCreateNftCollection: () => void;
}

export const Navbar = ({
  openDialogCreateNft,
  openDialogCreateNftCollection,
}: NavbarProps) => {
  const router = useRouter();
  const { openMenuLogin, handleCloseMenuLogin, handleOpenMenuLogin, user } =
    useAuth();

  const [openDialogSignup, setOpenDialogSignup] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 flex h-[73px] w-screen items-center justify-between border-b border-secondary bg-background px-4">
        <div className="mx-auto flex w-11/12 items-center">
          <Link href="/" className="text-xl font-bold text-white">
            OmNa<span className="text-primary">NFT</span>
          </Link>

          <ul className="mx-auto text-white">
            <li
              className={`navbar-link ${
                router.pathname === "/dashboard"
                  ? " text-primary"
                  : "text-white"
              }`}
              onClick={() => router.push("/dashboard")}
            >
              Coleções
            </li>
            <li
              className={`navbar-link ${
                router.pathname === "/my-nfts" ? " text-primary" : "text-white"
              }`}
              onClick={() => {
                if (!user) {
                  return handleOpenMenuLogin();
                }
                router.push("/my-nfts");
              }}
            >
              Minhas NFTs
            </li>
          </ul>

          <div className="flex items-center">
            {user ? (
              <div
                id="login"
                className="navbar-link"
                onClick={handleOpenMenuLogin}
              >
                {user.name}
              </div>
            ) : (
              <div
                id="login"
                className="navbar-link"
                onClick={handleOpenMenuLogin}
              >
                Login
              </div>
            )}

            {!user && (
              <div
                className="navbar-link"
                onClick={() => setOpenDialogSignup(true)}
              >
                Cadastrar
              </div>
            )}
          </div>
        </div>
      </nav>
      <MenuLogin
        anchorEl={null}
        open={openMenuLogin}
        handleClose={handleCloseMenuLogin}
        openDialogCreateNft={openDialogCreateNft}
        openDialogCreateNftCollection={openDialogCreateNftCollection}
      />
      <DialogSignup
        open={openDialogSignup}
        handleClose={() => setOpenDialogSignup(false)}
      />
    </>
  );
};
