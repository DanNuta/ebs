import { Product } from 'types';

export const filterProductsUtils = (prev: Product[], name: string): Product[] => {
  return prev.filter((p) => p.category?.id === name);
};
