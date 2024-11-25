import { cloudinary } from "@services";

export * from './fetcher';
export * from './actions';

export const uploadToCloudinary = async (fileUri: string, fileName: string) =>
  cloudinary.uploader
    .upload(
      fileUri, {
        invalidate: true,
        resource_type: "auto",
        filename_override: fileName,
        folder: `marks-joias`, // any sub-folder name in your cloud
        // folder: `community/upload-test`, // any sub-folder name in your cloud
        use_filename: true,
      }
    )
      .then(
        data => ({
          secure_url: data.secure_url,
          width: data.width,
          height: data.height,
          public_id: data.public_id
        })
      );

export const printConsigned = () => {
  
};
