import * as yup from "yup";

import { uploadToCloudinary } from '@utils';
import { Product } from "@prisma/client";

export const schema = yup.object({
  file: yup.string(),
  id: yup.number(),
  category: yup.string(),
  description: yup.string(),
  price: yup.string(),
  provider: yup.string(),
  quantity: yup.number(),
  print: yup.boolean(),
}).required();

interface SubmitProps {
  product: Product & {
    file: string;
  }
};

export const onSubmit = async ({ product }: SubmitProps) => {
  const image = await uploadToCloudinary(product.file!, String(product.id));

  if (!image.public_id) {
    throw new Error('upload fail')
  };

  const res = await fetch('/api/product', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...product, photo: image.secure_url })
  });

  if (!res.ok) return false;

  return res.json();
};