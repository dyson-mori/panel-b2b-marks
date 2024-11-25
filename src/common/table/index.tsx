import React from 'react';

import { Brush } from '@assets/svg';

import { Container, Table as TableStyled } from './styles';

interface Props {
  header: {
    name: string;
    width: number;
    content: string;
  }[];
  content: any[];
};

export const Table = ({ header, content }: Props) => {
  return (
    <Container>
      <TableStyled>
        <thead>
          <tr>
            {header.map(row =>
              <th key={row.name} style={{ width: `${row.width}%` }}>{row.name}</th>
            )}
            <th style={{ width: 50 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {content.map((row, index) => (
            <tr key={index} className={index === 2 ? 'active-row' : ''}>
              {header.map(row_header => (
                <td
                  key={row_header.name}
                >{row[row_header.content]}</td>
              ))}
              <td>
                <button>
                  <Brush width={20} height={20} stroke='#303030' strokeWidth={1.5} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </TableStyled>
    </Container>
  );
};
