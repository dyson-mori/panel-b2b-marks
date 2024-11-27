"use client";

import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';

import { SellerProps } from '@interface';
import { api } from '@services';
import { Button, Input, Modal, Table } from '@common';
import { Add, Guy } from '@assets/svg';

import { Container, Header } from './styles';

interface Props {
  seller: SellerProps[];
};

export default ({ seller }: Props) => {
  const route = useRouter();

  const [label, setLabel] = useState<string | null>(null);
  const [modal, setModal] = useState(false);

  const header = [
    {
      name: 'identification',
      width: 20,
      content: 'id'
    },
    {
      name: 'seller',
      width: 30,
      content: 'name'
    },
    {
      name: 'employee',
      width: 30,
      content: 'employee.nickname'
    },
    {
      name: 'return',
      width: 30,
      content: 'showcase.data_end'
    },
  ];

  function newSeller() {
    setModal(true);
  };

  function newShowcase() {
    route.push('/pages/seller/showcase')
  };

  function updateShowcase(id: string) {
    route.push(`/pages/seller/showcase?seller_id=${id}`);
  };

  async function createSeller() {
    if (!label) return;

    const seller = await api.seller.create({
      name: label
    });

    if (!seller) {
      return 'alert'
    };

    setModal(false);
    setLabel(null);
  };

  return (
    <Fragment>
      <Container>
        <Header>
          <Input icon={Guy} width='small' placeholder='Seller' />
          {/* <Select icon={Guy} width='small' placeholder='Search' select={people} onChange={evt => setTarget(evt.target.value)} /> */}
          <div style={{ width: 5 }} />
          <Button width={50} color='white' onClick={newSeller}>
            <Add width={25} height={25} stroke='#FA0B5B' strokeWidth={1.5} />
          </Button>
          <div style={{ width: 5 }} />
          <Button width={50} color='white' onClick={newShowcase}>
            <Add width={25} height={25} stroke='#FA0B5B' strokeWidth={1.5} />
          </Button>
        </Header>
        <Table header={header} content={seller} setShowcase={updateShowcase} />
      </Container>

      <Modal open={modal} setClose={() => setModal(false)}>
        <div style={{ height: 60 }} />
        <Input icon={Guy} width='small' placeholder='seller name' onChange={evt => setLabel(evt.target.value)} />
        <div style={{ height: 20 }} />
        <Button width={200} onClick={createSeller}>Salvar</Button>
      </Modal>
    </Fragment>
  );
};