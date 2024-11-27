import React from 'react';

import { Brush } from '@assets/svg';

import { Container } from './styles';
import { formatDate } from '@utils';

interface Props {
  header: {
    name: string;
    width: number;
    content: string;
  }[];
  content: any[];
  setUpdate?: (sellerId: string) => void;
  setShowcase?: (sellerId: string) => void;
};

export const Table: React.FC<Props> = ({ header, content, setUpdate, setShowcase }) => {
  return (
    <Container>
      <thead>
        <tr>
          {header.map(row => <th key={row.name} style={{ width: `${row.width}%` }}>{row.name}</th>)}
          <th className='actions'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {content.map((row, index) => (
          <tr key={index} className={index === 2 ? 'active-row' : ''}>
            {header.map(row_header => {
              const dot = row_header.content.includes('.');
              const result = dot
                ? formatDate(
                  row_header.content
                    .split('.')
                    .reduce(
                      (acc, key) => acc ? acc[key] : null, row
                    )
                )
                : row[row_header.content];

              return <td key={row_header.name}>{result}</td>
            })}
            <td className='actions'>
              {!!setUpdate && (
                <button onClick={() => setUpdate(row.id)}>
                  <Brush width={20} height={20} stroke='#303030' strokeWidth={1.5} />
                </button>
              )}
              {!!setShowcase && (
                <button onClick={() => setShowcase(row.id)}>
                  <Brush width={20} height={20} stroke='#303030' strokeWidth={1.5} />
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
};
