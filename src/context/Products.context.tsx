import React, { createContext, useState } from 'react';
import { ICard, Product, IContext } from '../types';

export const ProductsContext = createContext<IContext | null>(null);

export const ProductsProvider: React.FC = (props) => {
  const [card, setCard] = useState<ICard[] | []>([]);

  function addProduct(data: Product) {
    setCard((prev) => {
      return [...prev, { ...data, quantity: 1 }];
    });
  }

  function removeItem(data: Product) {
    setCard((prev) => {
      const filterItem = prev.filter((item) => item.id !== data.id);
      return filterItem;
    });
  }

  function changeQty(sign: string, id: number) {
    if (sign === '+') {
      setCard((prev) => {
        return prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
      });
    }

    if (sign === '-') {
      setCard((prev) => {
        return prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity > 1 ? p.quantity - 1 : 1 } : p));
      });
    }
  }

  return (
    <ProductsContext.Provider value={{ card, addProduct, removeItem, changeQty }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
