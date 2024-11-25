"use client";

import React, { useState } from 'react';

import { CategoryProps, ProductProps } from '@interface';
import { Button, Input, Product } from '@common';
import { Box, Add, Filter } from '@assets/svg';

import { Container, Content, Header } from './styles';

import ModalRegister from '../components/register';

interface Props {
  products: ProductProps[]
  category: CategoryProps[];
};

export default function Products({ products, category }: Props) {
  const size = {
    width: (innerWidth - 240) / 4
  };

  const [product, setProduct] = useState<ProductProps | null>(null);
  const [newProduct, setNewProduct] = useState(false);

  return (
    <Container>
      <Header>
        <Input icon={Box} width='small' placeholder='Search' />

        <div style={{ width: 5 }} />

        <Button width={50} color='white' onClick={() => setNewProduct(true)}>
          <Add width={25} height={25} stroke='#FA0B5B' strokeWidth={1.5} />
        </Button>

        <div style={{ width: 5 }} />

        <Button width={50} color='white' onClick={() => {}}>
          <Filter width={25} height={25} stroke='#FA0B5B' strokeWidth={1.5} />
        </Button>
      </Header>

      <Content>
        {products.map((row, index) => <Product key={index} product={row} size={size.width} onSelect={setProduct} />)}
      </Content>

      <ModalRegister
        open={newProduct}
        product={product}
        categories={category}
        setClose={() => {
          setProduct(null)
          setNewProduct(false)
        }}
      />
    </Container>
  );
};