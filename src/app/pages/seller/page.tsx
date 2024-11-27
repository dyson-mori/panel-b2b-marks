import type { Metadata } from 'next';

import Main from './main';

import { api } from '@services';

export const metadata: Metadata = {
  title: 'Marks | Seller',
};

export default async () => {
  const seller = await api.seller.list();

  return <Main seller={seller} />;
};