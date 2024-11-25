import { fetcher } from "@utils";

import { ApiProps } from "./type";

export const api: ApiProps = {
  dashboard: {
    list: () => fetcher({ url: '/dashboard',  method: 'GET' }),
  },

  product: {
    list: (find) => fetcher({ url: `/product${find ? `?productId=${find}` : ''}`,  method: 'GET', refresh: true }),
    create: (body) => fetcher({ url: '/product', method: 'POST', body }),
    update: (body) => fetcher({ url: '/product', method: 'PUT', body }),
  },

  category: {
    list: () => fetcher({ url: '/category',  method: 'GET' }),
  }
};

