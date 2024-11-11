import { Product } from "@prisma/client";

type ApiProps = {
  product: {
    list: (find?: string) => Promise<Product>;
    create: any;
  }
};

export const api: ApiProps = {
  product: {
    list: async (find) =>
      await fetch(`http://localhost:3000/api/product${find ? `?productId=${find}` : ''}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(jsn => jsn.json()),

    create: async (body: object) =>
      await fetch('http://localhost:3000/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(body)
      }).then(jsn => jsn.json())
  }
};

