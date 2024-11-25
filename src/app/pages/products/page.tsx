import type { Metadata } from 'next';

import { api } from '@services';

import Main from './main';

export const metadata: Metadata = {
  title: 'Marks | Products',
};

export default async () => {
  const products = await api.product.list();
  const category = await api.category.list();

  return <Main products={products} category={category} />;
};
