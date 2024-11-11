import { prisma } from '../../../services';
import Dashboard from './main';

const get = async () => {
  const res = await fetch('http://localhost:3000/api/dashboard', {
    method: 'GET'
  });

  if (!res.ok) {
    throw new Error('product get fail')
  };

  return res.json();
};

export default async () => {
  const dash = await get();

  const dashboard = {
    cards: [
      {
        title: 'receive',
        content: 0,
        color: '#4050D0'
      },
      {
        title: 'sellers',
        content: await prisma.seller.count(),
        color: '#8ECACD'
      },
      {
        title: 'sales',
        content: await prisma.sales.count(),
        color: '#9291DC'
      },
      {
        title: 'products',
        content: await prisma.product.count(),
        color: '#76A4F3'
      }
    ],
    graph: {
      pie: [
        { title: 'Chrome', quantity: 50, color: '#0088FE' },
        { title: 'Firefox', quantity: 100, color: '#00C49F' },
        { title: 'Safari', quantity: 500, color: '#FFBB28' },
        { title: 'Edge', quantity: 100, color: '#FF8042' },
      ],
    }
  };

  return <Dashboard dashboard={dashboard} />;
};