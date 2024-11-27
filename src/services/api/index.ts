import { fetcher } from "@utils";

import { ApiProps } from "./type";

export const api: ApiProps = {
  auth: {
    // login: (body) => fetcher({
    //   url: `/employee`, method: 'POST', body: {
    //     nickname: body.nickname,
    //     password: body.password,
    //     photo: 'https://res.cloudinary.com/dyrtdrnky/image/upload/v1729550668/community/creator/3afeaec84f4c0bd40fb5a891a7e96edf_apysrz.jpg'
    //   }
    // })
    login: (body) => fetcher({ url: `/employee?type=login`, method: 'POST', body })
  },
  dashboard: {
    list: () => fetcher({ url: '/dashboard', method: 'GET' }),
  },

  product: {
    list: (find) => fetcher({ url: `/product${find ? `?productId=${find}` : ''}`, method: 'GET' }),
    create: (body) => fetcher({ url: '/product', method: 'POST', body, refresh: true }),
    update: (body) => fetcher({ url: '/product', method: 'PUT', body, refresh: true }),
  },

  category: {
    list: () => fetcher({ url: '/category',  method: 'GET' }),
  },

  showcase: {
    list: (seller) => fetcher({ url: `/showcase?seller_id=${seller}`, method: 'GET' }),
    create: (body) => fetcher({ url: '/showcase', method: 'POST', body, refresh: true }),
  },

  seller: {
    list: () => fetcher({ url: '/seller', method: 'GET' }),
    create: (body) => fetcher({ url: '/seller', method: 'POST', body, refresh: true }),
  }
};

