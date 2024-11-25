"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Container, Header } from './styles';

import { Button, Select, Table } from '@common';
import { Add, People } from '@assets/svg';

interface Props {
  consigned: Array<any>;
};

export default ({ consigned }: Props) => {
  const route = useRouter();

  const [target, setTarget] = useState(null);

  // vai dar erro ao subir o db
  const people = consigned.map(row => ({
    id: row.id,
    label: row.seller
  }));

  const header = [
    {
      name: 'identification',
      width: 15,
      content: 'id'
    },
    {
      name: 'seller',
      width: 30,
      content: 'seller'
    },
    {
      name: 'prohibited',
      width: 20,
      content: 'settlement_date'
    },
    {
      name: 'exit',
      width: 20,
      content: 'due_date'
    },
    {
      name: 'employer',
      width: 20,
      content: 'settlement_user'
    }
  ];

  function handleNewConsigned() {
    route.push('/pages/consigned/new')
  };

  return (
    <Container>

      <Header>
        <Select icon={People} width='small' placeholder='Search' select={people} onChange={evt => setTarget(evt.target.value)} />

        <div style={{ width: 5 }} />

        <Button width={50} color='white' onClick={handleNewConsigned}>
          <Add width={25} height={25} stroke='#FA0B5B' strokeWidth={1.5} />
        </Button>
      </Header>

      <Table header={header} content={consigned} />

    </Container>
  );
};