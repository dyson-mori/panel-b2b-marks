"use client";

import React, { useState } from 'react';

import { Category, Product } from '@prisma/client';

import { Container } from './styles';

import Header from '../components/header';
import Table from '../components/table';
import ModalRegister from '../components/register';

interface Props {
  products: Array<{
    category: {
      title: string;
    }
  } & Product>;
  category: Category[];
};

export default function Products({ products, category }: Props) {
  const [register, setRegister] = useState(false);
  const [update, setUpdate] = useState<Product | null>();

  return (
    <Container>
      <Header setRegister={setRegister} />
      <Table products={products} setUpdate={e => { setUpdate(e), setRegister(true) }} />
      <ModalRegister open={register} categories={category} update={update} setClose={setRegister} />
    </Container>
  );
};