import React, { useContext } from 'react';
import { VCardItem } from '../../components';
import { ProductsContext } from '../../context/Products.context';
import { IContext } from '../../types';
import style from './style.module.css';

export const Card = () => {
  const { card } = useContext(ProductsContext) as IContext;

  const total = card
    .map((item) => item.price * item.quantity)
    .reduce((acc, curentValue) => acc + curentValue, 0)
    .toFixed(2);

  const lengthCard = card.length > 0 ? true : false;

  return (
    <div>
      All products
      {lengthCard ? (
        <table className={style.table}>
          <thead>
            <tr className={style.th}>
              <td className={style.td}>Category</td>
              <td className={style.td}>Name</td>
              <td className={style.td}>Quantity</td>
              <td className={style.td}>Price</td>
              <td className={style.td}>Actions</td>
            </tr>
          </thead>

          <tbody>
            {card.map((item) => {
              return <VCardItem key={item.id} item={item} />;
            })}
          </tbody>
        </table>
      ) : (
        <h1>Nu exista produse</h1>
      )}
      {lengthCard && <h1>Total: {total}</h1>}
    </div>
  );
};
