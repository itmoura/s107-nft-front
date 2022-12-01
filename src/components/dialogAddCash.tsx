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
import { addCash } from "../services/user";
import { toast } from "react-toastify";

interface DialogAddCashProps {
  open: boolean;
  handleClose: () => void;
}

interface FormData {
  cash: number;
}

export const DialogAddCash = ({ open, handleClose }: DialogAddCashProps) => {
  const { register, handleSubmit } = useForm<FormData>();
  const { initializeAuth } = useAuth();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await addCash(Number(data.cash));
      initializeAuth();
      handleClose();
      toast.success("Saldo adicionado com sucesso!");
    } catch (error) {
      toast.error("Erro ao adicionar saldo");
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
            subheader="Isso mesmo dinheiro de mentira de graça 😎"
            title="Adicionar Saldo"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  {...register("cash")}
                  fullWidth
                  label="Dinheiro"
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
              Adicionar
            </Button>
          </Box>
        </Card>
      </form>
    </Dialog>
  );
};
