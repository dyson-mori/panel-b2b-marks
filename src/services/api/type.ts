import { Category, Product } from "@prisma/client";

import { Dashboard } from "@interface";

export type ApiProps = {
  dashboard: {
    list: () => Promise<Dashboard>
  };
  product: {
    list: (find?: string) => Promise<Product[]>;
    create: (body: Product) => Promise<Product>;
    update: (body: Product) => Promise<Product>;
  };
  category: {
    list: () => Promise<Category[]>;
  };
};