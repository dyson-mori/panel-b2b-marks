import React, { useEffect, useRef } from 'react';

import { useClickOutside } from '@hooks/useClickOutside';

import { Container, Content } from './styles';

interface Props {
  size?: 'small' | 'large' | 'full';
  open: boolean;
  setClose(): void;
  children: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ open, size = 'small', setClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const styles: React.CSSProperties = {
    opacity: open ? 1 : 0,
    zIndex: open ? 1 : -1,
  };

  const content_styles = {
    minWidth: size === 'small' ? '40%' : '95%',
    minHeight: size === 'small' ? '40%' : '90%',
  };

  useClickOutside(modalRef, setClose);

  React.useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'auto';
  }, []);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (!modalRef.current!.contains(event.target)) {
  //       setClose();
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  // }, [modalRef]);

  return (
    <Container style={styles}>
      <Content ref={modalRef} style={content_styles}>
        {children}
      </Content>
    </Container>
  )
}

// export default withClickOutside(Home);