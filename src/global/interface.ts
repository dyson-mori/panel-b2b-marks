import { Showcase, Product, Seller, Category, Employee } from "@prisma/client";

export interface ProductProps extends Product { };

export interface CategoryProps extends Category { };

export interface SellerProps extends Seller {
  employee: Employee;
  showcase: Showcase;
};

export interface ShowcaseProps extends Showcase {
  employee: Employee;
  product: Product;
  seller: Seller;
};

export interface Dashboard {
  cards: {
    [key: string]: {
      title: string;
      quantity: number;
      today: number;
      color: string;
    };
  }[];

  graph: {
    area: {
      
    };
  };
};