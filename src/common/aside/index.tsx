"use client";

import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Box, Graph, Guy, Logout, Monitor, People } from '@assets/svg';
import { Logo } from '@assets/images';

import { logout } from './actions';
import { Container, Header, Nav, Footer } from './styles';

export const Aside: React.FC = () => {
  const param = usePathname();

  return (
    <Container>

      <Header>
        <Image src={Logo} width={60} height={60} alt='logo' />
      </Header>

      <Nav>
        <Link href={{ pathname: '/pages/dashboard' }}>
          <Graph width={22} height={22} stroke={param.includes('dashboard') ? '#FA0B5B' : '#303030'} strokeWidth={param.includes('dashboard') ? 2 : 1.5} />
          <span />
          dashboard
        </Link>
        <Link href={{ pathname: '/pages/products' }}>
          <Box width={22} height={22} stroke={param.includes('products') ? '#FA0B5B' : '#303030'} strokeWidth={param.includes('products') ? 2 : 1.5} />
          <span />
          products
        </Link>
        <Link href={{ pathname: '/pages/seller' }}>
          <Guy width={22} height={22} stroke={param.includes('seller') ? '#FA0B5B' : '#303030'} strokeWidth={param.includes('seller') ? 2 : 1.5} />
          <span />
          seller
        </Link>
        <Link href={{ pathname: '/pages/store' }}>
          <Monitor width={22} height={22} stroke={param.includes('store') ? '#FA0B5B' : '#303030'} strokeWidth={param.includes('store') ? 2 : 1.5} />
          <span />
          store
        </Link>
        {/* <Link href={{ pathname: '/pages/consigned' }}>
          <People width={22} height={22} stroke={param.includes('consigned') ? '#FA0B5B' : '#303030'} strokeWidth={param.includes('consigned') ? 2 : 1.5} />
          <span />
          consigned
        </Link> */}
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