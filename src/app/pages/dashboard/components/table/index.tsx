import React from 'react';

import { Container, Table } from './styles';
import { Brush } from '../../../../../assets/svg';

export default ({ consigned }: { consigned: any[] }) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>identification</th>
            <th>seller</th>
            <th>prohibited</th>
            <th>exit</th>
            <th>status</th>
            <th className='actions'>Actions</th>
            </tr>
        </thead>
        <tbody>
          {consigned.map((row, index) => (
            <tr key={index} className={index === 2 ? 'active-row' : ''}>
              <td>{row.identification}</td>
              <td>{row.seller}</td>
              <td>{row.prohibited}</td>
              <td>{row.exit}</td>
              <td>{row.status}</td>
              <td>
                <button>
                  <Brush width={20} height={20} stroke='#303030' strokeWidth={1.5} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
