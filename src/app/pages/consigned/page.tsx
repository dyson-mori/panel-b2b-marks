import { prisma } from '../../../services';
import Main from './main';

export default async () => {
  const consigned = [
    {
      id: '01847',
      seller: 'Silvana Francisco de Amaral',
      settlement_date: '2024-11-05T22:23:23.247Z',
      due_date: '2024-12-05T22:23:23.247Z',
      settlement_user: 'Leila Leal'
    },
    {
      id: '01846',
      seller: 'Tatiana Alves',
      settlement_date: '2024-11-05T22:23:23.247Z',
      due_date: '2024-12-05T22:23:23.247Z',
      settlement_user: 'Leila Leal'
    }
  ];

  // const products = await prisma.product.findMany({
  //   include: {
  //     category: {
  //       select: {
  //         title: true
  //       }
  //     }
  //   }
  // });

  return <Main consigned={consigned} />;
};