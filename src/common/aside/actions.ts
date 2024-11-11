"use server";
import { cookies } from 'next/headers'

export const logout = async () => {

  const del = await cookies();

  del.delete('current-user');
};