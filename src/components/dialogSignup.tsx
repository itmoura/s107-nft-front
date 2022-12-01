import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Dialog from "@mui/material/Dialog";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Button,
} from "@mui/material";
import ImageUpload from "./cloudinary-upload-widget";
import { createUser, createUserProps } from "../services/user";
import { toast } from "react-toastify";

interface DialogSignupProps {
  open: boolean;
  handleClose: () => void;
}

interface ImgCloudinary {
  asset_id: "b87ef00dd69f06401204a4d2051e57f8";
  batchId: "uw-batch2";
  bytes: 102327;
  created_at: "2022-11-30T21:45:18Z";
  etag: "4d0b0db8024cb7fc761fb5e4022f84fd";
  folder: "";
  format: "png";
  height: 758;
  id: "uw-file3";
  original_filename: "Cryptocurrency mobile app";
  path: "v1669844718/uusku2ackyxg3lcfha6j.png";
  placeholder: false;
  public_id: "uusku2ackyxg3lcfha6j";
  resource_type: "image";
  secure_url: "https://res.cloudinary.com/dlwhperew/image/upload/v1669844718/uusku2ackyxg3lcfha6j.png";
  signature: "05f2a8d9d0c9d04352e73105495ebba37309f9fd";
  tags: ["myname"];
  thumbnail_url: "https://res.cloudinary.com/dlwhperew/image/upload/c_limit,h_60,w_90/v1669844718/uusku2ackyxg3lcfha6j.png";
  type: "upload";
  url: string;
  version: 1669844718;
  version_id: "6336976f0ed9745b672371f3d76d758b";
  width: 600;
}

type FormData = createUserProps;

export const DialogSignup = ({ open, handleClose }: DialogSignupProps) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    try {
      if (imagesUploadedList) data.avatar = imagesUploadedList.url;

      await createUser(data);
      handleClose();
      toast.success("Usuário criado com sucesso!");
    } catch (error) {
      toast.error("Erro ao criar usuário");
    }
  };

  const [imagesUploadedList, setImagesUploadedList] =
    useState<ImgCloudinary | null>(null);

  const onImageUploadHandler = (publicUrl: ImgCloudinary) => {
    setImagesUploadedList(publicUrl);
  };

  const formatFileSize = (size: number) => {
    const units = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (size / Math.pow(1024, i)).toFixed(2) + " " + units[i];
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
          <CardHeader subheader="Bem vindo ao OMNANFT" title="Cadastrar" />
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
              <Grid item md={6} xs={12}>
                <TextField
                  {...register("email")}
                  fullWidth
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  {...register("password")}
                  fullWidth
                  label="Senha"
                  variant="outlined"
                  type="password"
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

              <Grid
                item
                xs={12}
                className="flex w-full flex-col items-center justify-center gap-4"
              >
                <ImageUpload
                  onImageUpload={(publicId: ImgCloudinary) =>
                    onImageUploadHandler(publicId)
                  }
                />
                {imagesUploadedList && (
                  <div className="flex w-full items-center gap-4">
                    <img
                      src={imagesUploadedList.url}
                      alt="uploaded"
                      className="h-32 w-32"
                    />
                    <div className="flex flex-col">
                      <span className="font-bold">
                        {imagesUploadedList.original_filename}
                      </span>
                      <span>{formatFileSize(imagesUploadedList.bytes)}</span>
                    </div>
                    <button
                      className="font-bold text-red-500"
                      onClick={() => setImagesUploadedList(null)}
                    >
                      x
                    </button>
                  </div>
                )}
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
              Cadastrar
            </Button>
          </Box>
        </Card>
      </form>
    </Dialog>
  );
};
