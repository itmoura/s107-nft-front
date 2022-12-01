import { Autocomplete, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Dialog from "@mui/material/Dialog";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Button,
} from "@mui/material";
import {
  creatNftCollection,
  editPriceNft,
  Nft,
  NftCollection,
} from "../services/nfts";
import { useAuth } from "../contexts/authContext";
import { addCash } from "../services/user";
import { toast } from "react-toastify";

interface DialogEditNftPriceProps {
  open: boolean;
  handleClose: () => void;
  nft: Nft | undefined;
}

interface FormData {
  price: number;
}

export const DialogEditNftPrice = ({
  open,
  handleClose,
  nft,
}: DialogEditNftPriceProps) => {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const { getMyNfts } = useAuth();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      if (nft) {
        await editPriceNft(nft.nftId, data.price);
        await getMyNfts();
        handleClose();
        toast.success("Preço alterado com sucesso!");
      } else {
        toast.error("NFT não encontrado");
      }
    } catch (error) {
      toast.error("Erro ao alterar preço");
    }
  };

  useEffect(() => {
    if (nft) {
      setValue("price", nft.price);
    }
  }, [nft]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader title="Editar Preço NFT" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  {...register("price")}
                  fullWidth
                  label="Novo preço"
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 0, step: 0.01 }}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            <Button
              color="primary"
              variant="contained"
              type="submit"
              className="bg-blue-500 hover:bg-blue-700"
            >
              Editar
            </Button>
          </Box>
        </Card>
      </form>
    </Dialog>
  );
};
