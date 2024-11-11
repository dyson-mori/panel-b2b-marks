import React from 'react';

import { Product } from '@prisma/client';

import { Brush, Image } from '../../../../../assets/svg';
import { Container } from './styles';

interface Props {
  products: Array<{
    category: {
      title: string;
    }
  } & Product>;
};
export default ({ products }: Props) => {
  return (
    <Container>
      <thead>
        <tr>
          <th>Code</th>
          <th>Description</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th className='actions'>Actions</th>
        </tr>
      </thead>
      <tbody>
          {products.map((row, index) => (
            <tr key={index} className={index === 2 ? 'active-row' : ''}>
              <td>{row.id}</td>
              <td>{row.description}</td>
              <td>{row.category.title}</td>
              <td>R$ {(Math.round(Number(row.price) * 100) / 100).toFixed(2)}</td>
              <td>{row.quantity}</td>
              <td className='actions'>
                <button>
                  <Brush width={20} height={20} stroke='#303030' strokeWidth={1.5} />
                </button>

                <button>
                  <Image width={20} height={20} stroke='#303030' strokeWidth={1.5} />
                </button>

                {/* <ContainerButton>
                  <MiniModal
                    style={{
                      // opacity: uploadImage === index ? 1 : 0,
                      // zIndex: uploadImage === index ? 1 : -1,
                      width: uploadImage === index ? 200 : 0,
                      height: uploadImage === index ? 200 : 0,
                    }}
                  >
                    <Image width={25} height={25} stroke='#ddd' strokeWidth={2} />
                  </MiniModal>
                  <button onClick={() => setUploadImage(index)}>
                    <Image width={20} height={20} stroke='#303030' strokeWidth={1.5} />
                  </button>
                </ContainerButton>

                <button onClick={() => handlePrint(row)}>
                  <BarCode width={20} height={20} stroke='#303030' strokeWidth={1.5} />
                </button> */}

              </td>
            </tr>
          ))}
        </tbody>
    </Container>
  );
};
