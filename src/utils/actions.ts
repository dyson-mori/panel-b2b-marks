'use server'

import { revalidatePath } from 'next/cache';
import { cookies } from "next/headers";
 
export async function revalidate(name: string) {
  revalidatePath(name)
};

export const serverAccessCookie = async (value: any) => {
  const coo = await cookies();
  
  await coo.set({
    name: 'beta-test-token',
    value,
  });
};