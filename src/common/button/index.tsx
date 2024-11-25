import React, { ButtonHTMLAttributes, CSSProperties } from 'react';

import { Container } from './styles';
import theme from '../../global/theme';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // secondary?: boolean | string;
  width?: 50 | 200 | 400 | 600;
  color?: string;
};

const Button: React.FC<ButtonProps> = ({ children, width = 200, color = 'primary', ...rest }) => {
  const styles: CSSProperties = {
    width,
    backgroundColor: theme.colors[color],
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