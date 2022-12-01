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
import { creatNftCollection, NftCollection } from "../services/nfts";
import { useAuth } from "../contexts/authContext";
import { toast } from "react-toastify";

interface DialogCreateNftProps {
  open: boolean;
  handleClose: () => void;
}

type FormData = Partial<NftCollection>;

export const DialogCreateNftCollection = ({
  open,
  handleClose,
}: DialogCreateNftProps) => {
  const { register, handleSubmit } = useForm<FormData>();
  const { user } = useAuth();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await creatNftCollection({
        name: data.name,
        description: data.description,
      });
      handleClose();
      toast.success("Coleção criada com sucesso!");
    } catch (error) {
      toast.error("Erro ao criar coleção");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader
            subheader="Essas informações podem ser editadas posteriormente"
            title="Criar Coleção de NFT"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  {...register("name")}
                  fullWidth
                  label="Nome"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("description")}
                  fullWidth
                  label="Descrição"
                  variant="outlined"
                  multiline
                  rows={4}
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
              Criar
            </Button>
          </Box>
        </Card>
      </form>
    </Dialog>
  );
};
