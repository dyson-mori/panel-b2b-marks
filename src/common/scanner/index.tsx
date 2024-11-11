"use client"
import React, { useEffect, useState } from 'react';

import { Product as PrismaProduct } from '@prisma/client';

import { api } from '@services';

import { Modal } from '../modal';
import { Product } from '../product';

import { Container } from './styles';

export default () => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({} as PrismaProduct | null);

  const handleClose = () => {
    setProduct(null);
    setOpen(false);
  };

  useEffect(() => {
    let barcode = "";

    document.addEventListener("keydown", async (event: any) => {
      if (!isNaN(event.key) || event.key === "Enter") {
        if (event.key === "Enter") {
          setOpen(true);

          api.product.list(barcode).then(setProduct);

          barcode = "";
        } else {
          barcode += event.key;
        }
      }
    })
    document.body.style.overflowY = product ? 'hidden' : 'auto';
  }, []);

  return (
    <Modal open={true} setClose={handleClose} size='small'>
      <Container>
        <Product product={product} />
      </Container>
    </Modal>
  );
};
