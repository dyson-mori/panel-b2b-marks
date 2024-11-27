import { NextRequest, NextResponse } from "next/server";
import { Category } from "@prisma/client";

import { prisma } from "../../../services";

import categories from './mock.json';

export async function GET(request: NextRequest) {
  // const url = new URL(request.url);
  // const title = url.searchParams.get("title") as string;

  const data = await prisma.category.findMany({
    orderBy: {
      title: 'asc'
    },
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