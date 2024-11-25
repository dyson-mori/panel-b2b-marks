"use client";

import Scanner from 'src/common/scanner';

import { Aside } from '@common';

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Scanner />
      <Aside />
      {children}
    </>
  )
}