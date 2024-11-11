"use client"

import React from 'react';

import { Card } from '../components/card';
import { Graph } from '../components/graph';

import Table from '../components/table';

import { Container } from './styles';

interface DashboardProps {
  graph: {
    pie: any[];
  };
  cards: {
    title: string;
    content: number;
    color: string;
  }[];
};

const consigned = [
  {
    identification: 0,
    seller: 'Anna',
    prohibited: '03/nov',
    exit: '3/dez',
    status: 'progress'
  },
  {
    identification: 1,
    seller: 'Anna',
    prohibited: '03/nov',
    exit: '3/dez',
    status: 'progress'
  },
  {
    identification: 2,
    seller: 'Anna',
    prohibited: '03/nov',
    exit: '3/dez',
    status: 'progress'
  },
  {
    identification: 3,
    seller: 'Anna',
    prohibited: '03/nov',
    exit: '3/dez',
    status: 'progress'
  },
  {
    identification: 4,
    seller: 'Anna',
    prohibited: '03/nov',
    exit: '3/dez',
    status: 'progress'
  },
  {
    identification: 5,
    seller: 'Anna',
    prohibited: '03/nov',
    exit: '3/dez',
    status: 'progress'
  },
  {
    identification: 6,
    seller: 'Anna',
    prohibited: '03/nov',
    exit: '3/dez',
    status: 'progress'
  },
];

export default ({ dashboard }: { dashboard: DashboardProps }) => {
  return (
    <Container>
      <Card cards={dashboard.cards} />
      <Graph graph={dashboard.graph} />
      <Table consigned={consigned} />
    </Container>
  );
}
