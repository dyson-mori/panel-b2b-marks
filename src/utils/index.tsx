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

export const currencyFormat = (value: number) => {
  if (!value) return 'R$ 0,00'

  const numericValue = String(value).replace(/\D/g, "");
  const floatValue = parseFloat(numericValue) / 100;

  return floatValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function formatDate(isoString: string | null) {
  if (!isoString) return '--';
  if (!isoString.includes('-') && !isoString.includes(':')) return isoString;

  const months = [
    'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
    'jul', 'ago', 'set', 'out', 'nov', 'dez'
  ];

  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} / ${month} / ${year}`;
}

export const printConsigned = () => {
  
};
