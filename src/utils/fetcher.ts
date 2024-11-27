"use server"

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface Props {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  refresh?: boolean;
  body?: any;
};

export const fetcher = async ({ url, method, body, refresh }: Props) => {
  const res = await fetch(`${process.env.NEXTBASE_URL}${url}`, {
    method,
    next: {
      tags: [refresh ? url.replace('/', '') : '']
    },
    // cache: 'no-store',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Cookie: await cookies() as any
    },
    body: JSON.stringify(body)
  })

  if (!res.ok) {
    throw new Error('Fetcher | Request Fail')
  };

  if (refresh) {
    revalidatePath(url);
  };

  return res.json();
};
