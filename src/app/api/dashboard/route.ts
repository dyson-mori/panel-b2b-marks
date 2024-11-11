import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

import { prisma } from "../../../services";

export async function GET(request: NextRequest) {
  const data = {
    seller: await prisma.seller.count(),
    products: await prisma.product.count(),
    sales: await prisma.sales.count(),
  };

  return NextResponse.json(data, { status: 201 });
};