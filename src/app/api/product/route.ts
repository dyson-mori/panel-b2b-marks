import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

import { prisma } from "@services";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") as string;
  const productId = url.searchParams.get("productId") as string;

  if (productId) {
    const product = await prisma.product.findFirst({
      where: {
        code_scanner: Number(productId)
      }
    });

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    };

    return NextResponse.json(product, { status: 201 });
  };

  if (title) {
    const data = await prisma.product.findMany({
      where: {
        category: {
          title
        }
      }
    });

    if (data.length === 0) {
      const category = await prisma.category.findFirst({
        where: {
          title
        }
      });

      const test = String(category?.code).length === 0 ? Number(`${category?.code}00000`) : Number(`${category?.code}0000`)

      return NextResponse.json([{ id: test }], { status: 201 });
    }


    return NextResponse.json(data, { status: 201 });
  };

  const data = await prisma.product.findMany({
    orderBy: {
      created_at: 'desc'
    },
    include: {
      employee: {
        select: {
          nickname: true
        }
      },
      category: {
        select: {
          title: true
        }
      }
    }
  });

  if (!data) {
    throw new Error('products');
  };

  const price = data.map(row => ({
    ...row,
    price: (Math.round(Number(row.price) * 100) / 100).toFixed(2)
  }))

  return NextResponse.json(price, { status: 201 });
};

export async function POST(request: NextRequest) {
  const { id, category, description, photo, price, provider, quantity } = await request.json();
  const cookieStore = await cookies();

  const employee_id = cookieStore.get('current-user')?.value as string;

  const find = await prisma.category.findFirst({
    where: {
      title: category
    }
  })

  const data = await prisma.product.create({
    data: {
      id,

      employee_id,
      category_id: find!.id,

      description,
      photo,
      price,
      provider,
      quantity,
    }
  });

  return NextResponse.json(data, { status: 201 });
};

export async function PUT(request: NextRequest) {
  const { id, category, description, photo, price, provider, quantity } = await request.json();

  const data = await prisma.product.update({
    where: {
      id
    },
    data: {
      price,
    }
  });

  return NextResponse.json(data, { status: 201 });
};

export async function DELETE(request: NextRequest) {
  
};