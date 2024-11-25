import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { prisma } from "@services";

export async function GET() {
  const to = new Date("2024-11-08T23:16:50.805Z"); // get only today
  const from = new Date("2024-11-08T23:16:50.805Z");
  // const from = new Date(to.getTime() - (7 * 24 * 60 * 60 * 1000));

  const receive = {
    title: 'Receive',
    color: '#4050D0',
    quantity: 0,
    today: 0,
    // today: await prisma.product.count({
    //   where: {
    //     created_at: {
    //       gte: from,
    //       lte: to,
    //     }
    //   }
    // })
  };

  const products = {
    title: 'Products',
    color: '#8ECACD',
    quantity: await prisma.product.count(),
    today: await prisma.product.count({
      where: {
        created_at: {
          gte: from,
          // lte: to,
        }
      }
    })
  };

  const seller = {
    title: 'Sellers',
    color: '#9291DC',
    quantity: await prisma.seller.count(),
    today: await prisma.seller.count({
      where: {
        created_at: {
          gte: from,
          // lte: to,
        }
      }
    })
  };

  const sales = {
    title: 'Sales',
    color: '#76A4F3',
    quantity: await prisma.sales.count(),
    today: await prisma.sales.count({
      where: {
        created_at: {
          gte: from,
          // lte: to,
        }
      }
    })
  };

  const data = {
    cards: [ receive, seller, sales, products ],
    graph: {
      area: await prisma.sales.findMany()
    }
  };

  return NextResponse.json(data, { status: 201 });
};