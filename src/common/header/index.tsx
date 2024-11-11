"use client";

import React from 'react';

import { Container } from './styles';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <Container>
      <Link href={{ pathname: '/products' }}>Products</Link>
      <Link href={{ pathname: '/register' }}>Register</Link>
      <Link href={{ pathname: '/' }}>reset</Link>
    </Container>
  );
};