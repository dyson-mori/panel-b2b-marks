import { Category, Product, Seller, Showcase } from "@prisma/client";

import { Dashboard, SellerProps, ShowcaseProps } from "@interface";

export type ApiProps = {
  auth: {
    login: (body: {
      nickname: string;
      password: string;
    }) => Promise<boolean>;
  };
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
  seller: {
    list: () => Promise<SellerProps[]>;
    create: (body: Omit<Seller, 'id' | 'employee_id' | 'created_at' | 'updated_at'>) => Promise<Seller>;
  };
  showcase: {
    list: (sellerId?: string) => Promise<ShowcaseProps[]>;
    create: (body: Omit<Showcase, 'id' | 'employee_id' | 'created_at' | 'updated_at'>) => Promise<Showcase>;
  };
};