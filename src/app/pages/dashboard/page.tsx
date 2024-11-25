import Dashboard from './main';

import { api } from '@services';

export default async () => {
  const dash = await api.dashboard.list();
  
  const dashboard = {
    cards: dash.cards,
    // graph: dash.
    // graph: {
    //   pie: [
    //     { title: 'Chrome', quantity: 50, color: '#0088FE' },
    //     { title: 'Firefox', quantity: 100, color: '#00C49F' },
    //     { title: 'Safari', quantity: 500, color: '#FFBB28' },
    //     { title: 'Edge', quantity: 100, color: '#FF8042' },
    //   ],
    // }
  };

  return <Dashboard dashboard={dashboard} />;
};