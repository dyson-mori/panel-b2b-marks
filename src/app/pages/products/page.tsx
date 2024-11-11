import { prisma } from '../../../services';
import Main from './main';

const getProducts = async () => {
  const res = await fetch('http://localhost:3000/api/product', {
    method: 'GET'
  });

  if (!res.ok) {
    throw new Error('product get fail')
  };

  return res.json();
};

export default async () => {
  const products = await getProducts();

  const category = await prisma.category.findMany();

  return <Main products={products} category={category} />;
};
