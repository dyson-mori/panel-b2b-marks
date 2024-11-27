import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

import { prisma } from "@services";

export async function GET(request: NextRequest) {
  const data = await prisma.seller.findMany({
    orderBy: {
      created_at: 'desc'
    },
    include: {
      employee: true,
      showcase: true
    }
  });

  if (!data) {
    throw new Error('products');
  };

  return NextResponse.json(data, { status: 201 });
};

export async function POST(request: NextRequest) {
  const { name } = await request.json();
  const cookieStore = await cookies();

  const employee_id = cookieStore.get('use-token')?.value as string;

  const data = await prisma.seller.create({
    data: {
      name,

      employee_id,
    }
  });

  return NextResponse.json(data, { status: 201 });
};

export async function PUT(request: NextRequest) {
  const { id, name } = await request.json();

  const data = await prisma.seller.update({
    where: {
      id
    },
    data: {
      name
    }
  });

  return NextResponse.json(data, { status: 201 });
};

export async function DELETE(request: NextRequest) {

};