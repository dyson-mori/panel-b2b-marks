import React, { useState } from 'react';

import { Product } from '@prisma/client';

import { BarCode, Brush } from '../../../../../assets/svg';
import { Container } from './styles';
import { Modal } from '../../../../../common';
import Print from '../print';

interface Props {
  products: Array<{
    category: {
      title: string;
    }
  } & Product>;

  setUpdate: (product: Product) => void;
};

export default ({ products, setUpdate }: Props) => {
  const [modal, setModal] = useState({
    open: false,
    data: null as Product | null
  });

  return (
    <>
      <Container>
        
      </Container>

      <Modal open={modal.open} setClose={() => setModal({ ...modal, open: false })}>
        <Print product={modal.data} />
      </Modal>
    </>
  );
};
