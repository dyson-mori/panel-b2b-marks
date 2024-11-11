import React, { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

import { Container } from './styles';
import theme from '../../global/theme';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // secondary?: boolean | string;
  width?: 200 | 400 | 600
};

const Button: React.FC<ButtonProps> = ({ children, width = 200, ...rest }) => {
  const styles: CSSProperties = {
    width,
    backgroundColor: theme.colors.primary,
    color: '#fff',
    fontWeight: 600
  };

  return (
    <Container style={styles} {...rest}>
      {children}
    </Container>
  )
};

export {
  Button,
  type ButtonProps
}