import React from 'react';

import { Input } from '../../../../../common';
import { Box } from '../../../../../assets/svg';

import { Container } from './styles';

interface Props {
  setRegister: (a: boolean) => void;
};

export default ({ setRegister }: Props) => {
  return (
    <Container>
      <Input icon={Box} width='small' placeholder='Products' setProduct={() => setRegister(true)} />
    </Container>
  );
};
