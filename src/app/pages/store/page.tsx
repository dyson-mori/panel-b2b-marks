import type { Metadata } from 'next';

import Main from './main';

export const metadata: Metadata = {
  title: 'Marks | Store',
};

export default async () => {
  return <Main />;
};