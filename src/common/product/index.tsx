import React from 'react';

import Image from 'next/image';

import { Product as PrismaProduct } from '@prisma/client';

import { Container, Footer } from './styles';

interface ProductProps {
  size: number;
  product: PrismaProduct;
  onSelect: (product: PrismaProduct) => void;
};

const Product: React.FC<ProductProps> = ({ size = 300, product, onSelect }) => {
  if (!product) {
    return null;
  };

  return (
    <Container onClick={() => onSelect(product)}>
      {
        product.photo && <Image src={product.photo} width={size} height={size} alt='photo' />
      }

      <Footer>
        <h3>{product.description}</h3>
        <div style={{ height: 3 }} />
        <p>R$ {product.price}</p>
      </Footer>
    </Container>
  )
}

export { Product };