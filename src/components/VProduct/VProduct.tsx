import React, { useContext } from 'react';
import style from './style.module.css';
import { Product, IContext } from '../../types';
import { ProductsContext } from '../../context/Products.context';

import prdStyle from './style.module.css';

interface IProps {
  item: Product;
}

export const VProduct: React.FC<IProps> = ({ item }) => {
  const { addProduct, removeItem, card } = useContext(ProductsContext) as IContext;

  return (
    <tr className={card.some((p) => p.id === item.id) ? `${prdStyle.card_ites}` : 'no_card'}>
      <td className={style.td}>{item.category.name}</td>
      <td className={style.td}>{item.name}</td>
      <td className={style.td}>{item.price}</td>
      <td className={style.td}>
        <button onClick={() => addProduct(item)}>+</button> Select <button onClick={() => removeItem(item)}>-</button>
      </td>
    </tr>
  );
};
