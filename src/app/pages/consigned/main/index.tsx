"use client";

import React, { useState } from 'react';

import { Container, Empty } from './styles';

import { Select } from '../../../../common';
import { People } from '../../../../assets/svg';

import theme from '../../../../global/theme';

interface Props {
  consigned: Array<any>;
};

export default ({ consigned }: Props) => {
  const [target, setTarget] = useState(null);

  // vai dar erro ao subir o db
  const people = consigned.map(row => ({
    id: row.id,
    label: row.seller
  }));

  const style_card = {
    border: target ? theme.settings.border.dashed : 0,
    height: target ? '90%' : 0,
    margin: 12
  };

  return (
    <Container>

      {target && <div style={{ margin: 10 }} />}

      <Select icon={People} width='small' placeholder='Search' select={people} onChange={evt => setTarget(evt.target.value)} />

      <Empty style={style_card} />

    </Container>
  );
};