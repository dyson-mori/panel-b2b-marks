import type { Metadata } from 'next';

import App from './app';

export const metadata: Metadata = {
  title: 'Marks | New Consigned',
};

export default async () => {
  const consigned = [
    {
      id: '01847',
      seller: {
        name: 'Silvana Francisco de Amaral'
      },
      settlement_date: '2024-11-05T22:23:23.247Z',
      due_date: '2024-12-05T22:23:23.247Z',
      settlement_user: 'Leila Leal'
    },
    {
      id: '01846',
      seller: {
        name: 'Tatiana Alves'
      },
      settlement_date: '2024-11-05T22:23:23.247Z',
      due_date: '2024-12-05T22:23:23.247Z',
      settlement_user: 'Leila Leal'
    }
  ];

  return <App consigned={consigned} />;
};