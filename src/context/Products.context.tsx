import React, { createContext, useState } from 'react';
import { ICard, Product, IContext } from '../types';

export const ProductsContext = createContext<IContext | null>(null);

export const ProductsProvider: React.FC = (props) => {
  const [card, setCard] = useState<ICard[] | []>([]);

  function incremnetQty(prev: ICard[], curentData: Product) {
    return prev.map((p) => (p.id === curentData.id ? { ...p, quantity: p.quantity + 1 } : p));
  }

  function addProduct(data: Product) {
    setCard((prev) => {
      const elementExist = prev.some((p) => p.id === data.id);
      if (elementExist) return incremnetQty(prev, data);
      return [...prev, { ...data, quantity: 1 }];
    });
  }

  function removeItem(data: Product) {
    setCard((prev) => {
      const filterItem = prev.filter((item) => item.id !== data.id);
      return filterItem;
    });
  }

  function changeQty(sign: string, data: Product) {
    if (sign === '+') {
      setCard((prev) => {
        return incremnetQty(prev, data);
      });
    }

    if (sign === '-') {
      setCard((prev) => {
        return prev.map((p) => (p.id === data.id ? { ...p, quantity: p.quantity > 1 ? p.quantity - 1 : 1 } : p));
      });
    }
  }

  return (
    <ProductsContext.Provider value={{ card, addProduct, removeItem, changeQty }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
