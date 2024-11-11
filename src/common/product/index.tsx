import React from 'react';

import Image from 'next/image';

import { Product as PrismaProduct } from '@prisma/client';

import { Container, Skeleton } from './styles';

interface ProductProps {
  product: PrismaProduct | null
};

const Product: React.FC<ProductProps> = ({ product }) => {
  if (!product) {
    return null;
  };

  return (
    <Container>
      <Skeleton />
      {/* <Image src={product.photo} width={300} height={300} alt='photo' /> */}
    </Container>
  )
}

export { Product };