import { Consigned, Product, Seller, Category } from "@prisma/client";

export interface ProductProps extends Product { };

export interface ConsignedProps extends Consigned {
  seller: Seller
};

export interface CategoryProps extends Category { };

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