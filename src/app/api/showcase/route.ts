import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

import { prisma } from "@services";
import { Showcase } from "@prisma/client";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const seller = url.searchParams.get("seller_id") as string;

  if (!seller) {
    return NextResponse.json([], { status: 201 });
  };

  const data = await prisma.showcase.findMany({
    where: {
      seller: {
        id: seller
      }
    },
    orderBy: {
      created_at: 'desc'
    },
    include: {
      employee: true,
      product: true,
      seller: true
    }
  });

  if (!data) {
    throw new Error('showcase');
  };

  return NextResponse.json(data, { status: 201 });
};

export async function POST(request: NextRequest) {
  const { data_start, data_end, seller_id, product_id } = await request.json() as Showcase;

  const cookieStore = await cookies();
  const employee_id = cookieStore.get('use-token')?.value as string;

  const data = await prisma.showcase.create({
    data: {
      employee_id,
      seller_id,
      product_id,

      type: 'romaneio',
      data_start,
      data_end,
    }
  });

  return NextResponse.json(data, { status: 201 });
};

export async function PUT(request: NextRequest) {
  const { id, data_start, data_end, seller_id, product_id } = await request.json() as Showcase;

  const cookieStore = await cookies();
  const employee_id = cookieStore.get('use-token')?.value as string;

  const data = await prisma.showcase.update({
    where: {
      id
    },
    data: {
      employee_id,
      seller_id,
      product_id,

      type: 'consigned',
      data_start,
      data_end,
    }
  });

  return NextResponse.json(data, { status: 201 });
};

export async function DELETE(request: NextRequest) {
  const { id } = await request.json() as Showcase;

  const data = await prisma.showcase.delete({
    where: {
      id
    },
  });

  if (!data) {
    return NextResponse.json(false, { status: 400 });
  };

  return NextResponse.json(true, { status: 201 });
};