import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { Employee } from "@prisma/client";

import { prisma } from "../../../services";

export async function POST(request: NextRequest) {
  const { nickname, password } = await request.json() as Employee;
  const cookieStore = await cookies();

  const data = await prisma.employee.findFirst({
    where: {
      nickname,
      password
    },
  });

  if(!data) {
    // const data = await prisma.employee.create({
    //   data: {
    //     nickname, password
    //   }
    // });

    return NextResponse.json({ message: 'User not found!' }, { status: 404 });
  };

  cookieStore.set('current-user', data.id);

  // const data = await prisma.admin.create({
  //   data: {
  //     nickname, password, photo: ''
  //   }
  // });

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