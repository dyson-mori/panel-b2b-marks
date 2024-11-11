import React from 'react';

import { Container, Content } from './styles';

import { MoneyReceive } from '../../../../../assets/svg';

interface Props {
  cards: Array<any>;
};

const Card: React.FC<Props> = ({ cards }) => {
  return (
    <Container>
      {cards.map((row, index) => (
        <Content key={index}>
          <span style={{ backgroundColor: row.color }} />
          <div className='title'>
            <p>{row.title}</p>
            <h4>{row.content}</h4>
          </div>
          <MoneyReceive width={50} height={50} fill={row.color} />
        </Content>
      ))}
    </Container>
  )
}

export { Card };