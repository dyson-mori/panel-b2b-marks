import React from 'react';

import { useTheme } from 'styled-components';

import { Container } from './styles';
import { AddBox } from '../../assets/svg';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  width?: 'small' | 'medium' | 'full';
  setProduct?: () => void;
};

export const Input: React.FC<InputProps> = ({ icon: Icon, width, setProduct, ...rest }) => {
  const theme = useTheme();

  const styles = {
    width: width === 'small' ? 300 : width === 'medium' ? 400 : '100%'
  };

  return (
    <Container style={styles}>
      <span>
        <Icon width={21} height={21} stroke={theme.colors.primary} strokeWidth={2} />
      </span>
      <input placeholder='what?' {...rest} />
      {setProduct && (
        <button onClick={setProduct}>
          <AddBox width={20} height={20} stroke={theme.colors.primary} strokeWidth={1.5} />
        </button>
      )}
    </Container>
  )
}