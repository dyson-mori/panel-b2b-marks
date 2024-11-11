import React from 'react';

import { Container } from './styles';
import { Input } from '../../../../../common';
import { Box } from '../../../../../assets/svg';

export default () => {
  return (
    <Container>
      <Input icon={Box} width='small' placeholder='Products' setProduct={() => {}} />
    </Container>
  );
};
