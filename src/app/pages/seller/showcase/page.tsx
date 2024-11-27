import type { Metadata } from 'next';

import Main from './main';

import { api } from '@services';

export const metadata: Metadata = {
  title: 'Marks | Seller',
};

export default async () => {
  const seller = await api.seller.list();
  const showcase = await api.showcase.list('cm3z13xiy0001o4hez4iho3dr');

  return <Main sellers={seller} showcase={showcase} />;
};