import React, { useContext } from 'react';

import { IContext, ICard } from 'types';
import { ProductsContext } from 'context';

import style from './style.module.css';

interface IProps {
  item: ICard;
}

export const VCardItem: React.FC<IProps> = ({ item }) => {
  const { removeItem, changeQty } = useContext(ProductsContext) as IContext;

  return (
    <tr className={style.tr}>
      <td>{item.category.name}</td>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.price}</td>
      <td>
        <button onClick={() => changeQty('+', item)}>+</button> <button onClick={() => removeItem(item)}>Remove</button>{' '}
        <button onClick={() => changeQty('-', item)}>-</button>
      </td>
    </tr>
  );
};
