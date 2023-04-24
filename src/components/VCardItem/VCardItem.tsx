import React, { useContext } from 'react';
import style from './style.module.css';
import { IContext, ICard } from '../../types';
import { ProductsContext } from '../../context/Products.context';

interface IProps {
  item: ICard;
}

export const VCardItem: React.FC<IProps> = ({ item }) => {
  const { removeItem, changeQty } = useContext(ProductsContext) as IContext;

  return (
    <tr>
      <td className={style.td}>{item.category.name}</td>
      <td className={style.td}>{item.name}</td>
      <td className={style.td}>{item.quantity}</td>
      <td className={style.td}>{item.price}</td>
      <td className={style.td}>
        <button onClick={() => changeQty('+', item.id)}>+</button>{' '}
        <button onClick={() => removeItem(item)}>Remove</button>{' '}
        <button onClick={() => changeQty('-', item.id)}>-</button>
      </td>
    </tr>
  );
};
