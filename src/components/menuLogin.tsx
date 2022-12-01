import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../services/user";
import axios from "axios";
import { useAuth } from "../contexts/authContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { DialogAddCash } from "./dialogAddCash";

interface MenuLoginProps {
  open: boolean;
  handleClose: () => void;
  anchorEl: HTMLElement | null;
  openDialogCreateNft: () => void;
  openDialogCreateNftCollection: () => void;
}

interface FormData {
  email: string;
  password: string;
}

export const MenuLogin = ({
  anchorEl,
  open,
  handleClose,
  openDialogCreateNft,
  openDialogCreateNftCollection,
}: MenuLoginProps) => {
  const [logado, setLogado] = useState(false);
  const [openDialogAddCash, setOpenDialogAddCash] = useState(false);
  const router = useRouter();

  const TextFieldLight = styled(TextField)({
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
  });

  const { register, handleSubmit } = useForm<FormData>();
  const { handleLogin, handleLogout, user } = useAuth();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await handleLogin(data);
      setLogado(true);
    } catch (error) {
      console.log(error);
    }
  };

  const [anchorElPopover, setAnchorElPopover] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    if (document) {
      setAnchorElPopover(document.getElementById("login"));
    }
  }, []);

  return (
    <>
      <Popover
        anchorEl={anchorElPopover}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px #ffffff21)",
            mt: 1.5,
            borderRadius: "0.6rem",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "#171024",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {user && (
          <div className="flex w-64 flex-col items-center rounded-lg bg-background py-4">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt="avatar"
                className="h-16 w-16 rounded-full"
              />
            ) : (
              <div className="h-14 w-14 rounded-full bg-white"></div>
            )}
            <span className="mt-4 font-medium text-white">{user.name}</span>
            <div className="mt-4 flex w-full items-center justify-between px-8 text-white">
              <div className="flex flex-col text-center">
                <span>Saldo</span>
                <span>{user.cash || 0} Eth</span>
              </div>
              <div
                className="navbar-link mr-0 flex flex-col text-center"
                onClick={() => setOpenDialogAddCash(true)}
              >
                <span>Adicionar</span>
                <span>Saldo</span>
              </div>
            </div>
            <div className="mt-4 h-[1px] w-full bg-primary"></div>

            <ul
              className="mt-4 
        flex w-full flex-col items-start gap-2 px-4 text-white"
            >
              {/* <li className="navbar-link ">Propostas</li> */}
              <li
                className="navbar-link "
                onClick={() => {
                  router.push("/my-nfts");
                  handleClose();
                }}
              >
                Minhas NFTs
              </li>
              <li className="navbar-link " onClick={openDialogCreateNft}>
                Criar NFT
              </li>
              <li
                className="navbar-link "
                onClick={openDialogCreateNftCollection}
              >
                Criar Coleção de NFT
              </li>
            </ul>

            <div className="mt-4 h-[1px] w-full bg-primary"></div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="font-regular mt-4 rounded-lg border-2 border-solid border-white  py-2 px-6 text-white transition-all duration-300 ease-linear hover:border-primary hover:text-primary"
              >
                Sair
              </button>
            </div>
          </div>
        )}

        {!user && (
          <form
            className="flex w-64 flex-col items-center rounded-lg bg-background py-4 px-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <span className="mb-4 font-bold text-white">Login</span>
            <TextFieldLight
              {...register("email", { required: true })}
              label="Email"
              variant="outlined"
            />
            <TextFieldLight
              {...register("password", { required: true })}
              label="Senha"
              variant="outlined"
              sx={{
                mt: 2,
              }}
              type="password"
            />
            <div className="flex items-center">
              <button
                className="mt-4 rounded-lg bg-secondary py-2 px-6 font-bold text-white transition-all duration-300 ease-linear hover:bg-primary"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        )}
      </Popover>
      <DialogAddCash
        open={openDialogAddCash}
        handleClose={() => setOpenDialogAddCash(false)}
      />
    </>
  );
};
