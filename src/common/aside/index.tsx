"use client";

import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Box, Graph, Logout, People } from '../../assets/svg';

import { logout } from './actions';
import { Container, Header, Nav, Footer } from './styles';

import Logo from '../../assets/icons/logo.png';

export const Aside: React.FC = () => {
  const param = usePathname();

  return (
    <Container>

      <Header>
        <Image src={Logo} width={60} height={60} alt='logo' />
      </Header>

      <Nav>
        <Link href={{ pathname: '/pages/dashboard' }}>
          <Graph width={22} height={22} stroke={param === '/pages/dashboard' ? '#FA0B5B' : '#303030'} strokeWidth={param === '/pages/dashboard' ? 2 : 1.5} />
          <span />
          dashboard
        </Link>
        <Link href={{ pathname: '/pages/products' }}>
          <Box width={22} height={22} stroke={param === '/pages/products' ? '#FA0B5B' : '#303030'} strokeWidth={param === '/pages/products' ? 2 : 1.5} />
          <span />
          products
        </Link>
        <Link href={{ pathname: '/pages/consigned' }}>
          <People width={22} height={22} stroke={param === '/pages/consigned' ? '#FA0B5B' : '#303030'} strokeWidth={param === '/pages/consigned' ? 2 : 1.5} />
          <span />
          consigned
        </Link>
      </Nav>

      <Footer>
        <Link href={{ pathname: '/' }} onClick={logout}>
          <Logout width={22} height={22} stroke='#303030' strokeWidth={1.5} />
          <span />
          logout
        </Link>
      </Footer>

    </Container>
  );
};