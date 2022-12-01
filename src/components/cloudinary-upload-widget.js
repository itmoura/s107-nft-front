import { Cloudinary as CoreCloudinary, Util } from "cloudinary-core";
import { Cloudinary } from "@cloudinary/url-gen";
import { Button } from "@mui/material";

export const url = (publicId, options) => {
  try {
    const scOptions = Util.withSnakeCaseKeys(options);
    const cl = CoreCloudinary.new();
    return cl.url(publicId, scOptions);
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const openUploadWidget = (options, callback) => {
  return window.cloudinary.openUploadWidget(options, callback);
};

const ImageUpload = (props) => {
  const cld = new Cloudinary({
    cloud: {
      cloud_name: "dlwhperew", //Your cloud name
      upload_preset: "mmgqecww", //Create an unsigned upload preset and update this
    },
  });

  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: cld.cloudinaryConfig.cloud.cloud_name,
        uploadPreset: cld.cloudinaryConfig.cloud.upload_preset,
        tags: ["myname"],
        maxImageWidth: 600,
        sources: ["local", "url", "camera"],
        multiple: false,
      },
      function (error, result) {
        if (!error && result.event === "success") {
          props.onImageUpload(result.info);
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <Button
      variant="contained"
      onClick={uploadImageWidget}
      className="bg-blue-500 hover:bg-blue-700"
    >
      Upload Image
    </Button>
  );
};

export default ImageUpload;
