// gerar a tabela num excel

import { NextRequest, NextResponse } from "next/server";

import { Employee } from "@prisma/client";

import { prisma } from "@services";

export async function POST(request: NextRequest) {
  const { nickname, password } = await request.json() as Employee;

  const employee = await prisma.employee.findFirst({
    where: {
      nickname, password
    }
  });

  if (!employee) {
    return NextResponse.json(false, { status: 404, statusText: 'user not found' });
  };

  return NextResponse.json(employee.id, { status: 201 });
};