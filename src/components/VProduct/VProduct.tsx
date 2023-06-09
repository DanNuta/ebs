import React, { useContext } from 'react';

import { Product, IContext } from 'types';
import { ProductsContext } from 'context/Products.context';

import style from './style.module.css';
import prdStyle from './style.module.css';

interface IProps {
  item: Product;
}

export const VProduct: React.FC<IProps> = ({ item }) => {
  const { addProduct, removeItem, card } = useContext(ProductsContext) as IContext;

  function changeQty(item: Product) {
    addProduct(item);
  }

  function removeItemFn(item: Product) {
    removeItem(item);
  }

  return (
    <tr className={card.some((p) => p.id === item.id) ? `${prdStyle.card_ites} ${style.tr}` : `${style.tr}`}>
      <td>{item.category?.name}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td className={style.td}>
        <button onClick={() => changeQty(item)}>+</button> Select <button onClick={() => removeItemFn(item)}>-</button>
      </td>
    </tr>
  );
};
