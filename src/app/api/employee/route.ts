import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { Employee } from "@prisma/client";

import { prisma } from "@services";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const cookieStore = await cookies();

  const nickname = url.searchParams.get("nickname") as string;
  const password = url.searchParams.get("password") as string;

  const data = await prisma.employee.findFirst({
    where: {
      nickname, password
    }
  });

  if (!data) {
    return NextResponse.json(false, { status: 404, statusText: 'user not found' });
  };

  cookieStore.set('use-token', data.id);

  return NextResponse.json(true, { status: 201 });
};

export async function POST(request: NextRequest) {
  const url = new URL(request.url);
  const type = url.searchParams.get("type") as string;
  const cookieStore = await cookies();

  const { nickname, password, photo } = await request.json() as Employee;

  if (type === 'login') {
    const data = await prisma.employee.findFirst({
      where: {
        nickname, password
      }
    });

    if (!data) {
      return NextResponse.json(false, { status: 404, statusText: 'user not found' });
    };

    console.log(data.id);

    cookieStore.set('use-token', data.id, {
      httpOnly: false,
      expires: 24 * 60 * 60,
      path: '/'
    });

    return NextResponse.json(true,
      {
        status: 201,
        // headers: {
        //   'Set-Cookie': `use-token=${data.id}`
        // }
      }
    );
  };

  const data = await prisma.employee.create({
    data: {
      nickname,
      password,
      photo
    },
  });

  if (!data) {
    return NextResponse.json(false, { status: 404 });
  };

  return NextResponse.json(data, { status: 201 });
};

/*
  {
    "id":"faf45e46-b513-46f5-98bf-6b38f02b0a89",
    "nickname":"vivi",
    "password":"123456",
    "photo":"",
    "created_at":"2024-10-31T00:58:58.807Z",
    "updated_at":"2024-10-31T00:58:58.807Z"
  }
*/