import { NextRequest, NextResponse } from "next/server";
import { Category } from "@prisma/client";

import { prisma } from "../../../services";

const categories = [
  { title: 'anel', code: 1 },
  { title: 'choker', code: 11 },
  { title: 'gargantilha', code: 12 },
  { title: 'escapulário', code: 13 },
  { title: 'falange', code: 14 },
  { title: 'duplo', code: 16 },
  { title: 'bolsa', code: 17 },
  { title: 'cinto', code: 18 },
  { title: 'carteira', code: 19 },
  { title: 'argola', code: 20 },
  { title: 'relógio', code: 23 },
  { title: 'brinco', code: 3 },
  { title: 'conjunto', code: 4 },
  { title: 'corrente', code: 5 },
  { title: 'pingente', code: 6 },
  { title: 'pulseira', code: 7 },
  { title: 'tornozeleira', code: 8 },
  { title: 'trio', code: 9 },
];

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") as string;

  // await prisma.category.create({
  //   data: {
  //     title: 'gargantilha',
  //     code: 12
  //   }
  // });

  const data = await prisma.category.findMany({
    orderBy: {
      title: 'asc'
    },
    where: {
      title
    }
  });

  if (!data) {
    throw new Error('category');
  };

  // categories.map((row, index) => {
  //   setTimeout(async () => {
  //     await prisma.category.create({
  //       data: {
  //         title: row.title,
  //         code: row.code
  //       }
  //     });
  //   }, Number(`${index}000`));
  // })

  return NextResponse.json(data, { status: 201 });
};

export async function POST(request: NextRequest) {
  const { title, code } = await request.json() as Category;

  const data = await prisma.category.create({
    data: {
      title,
      code
    }
  });

  return NextResponse.json(data, { status: 201 });
};