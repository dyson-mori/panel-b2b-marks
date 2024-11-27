import type { Metadata } from 'next';
import Dashboard from './main';

import { api } from '@services';

export const metadata: Metadata = {
  title: 'Marks | Dashboard',
};

export default async () => {
  const dash = await api.dashboard.list();
  
  const dashboard = {
    cards: dash.cards,
  };

  return <Dashboard dashboard={dashboard} />;
};