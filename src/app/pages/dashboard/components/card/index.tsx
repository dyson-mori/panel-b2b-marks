import React from 'react';

import { Container, Content, Up } from './styles';

import { MoneyReceive } from '@assets/svg';

interface Props {
  cards: Array<any>;
};

function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const Card: React.FC<Props> = ({ cards }) => {
  return (
    <Container>
      {cards?.map((row, index) => (
        <Content key={index}>
          <Up>
            <span style={{ backgroundColor: row.color }} />
            <div className='title'>
              <p>{capitalizeFirstLetter(row.title)}</p>
              <h4>{row.quantity}</h4>
            </div>
            <MoneyReceive width={50} height={50} fill={row.color} />
          </Up>

          <p className='down'><span style={{ color: row.color }}>{row.today === 0 ? row.today : `+${row.today}`}</span> {row.title}</p>

        </Content>
      ))}
    </Container>
  )
}

export { Card };