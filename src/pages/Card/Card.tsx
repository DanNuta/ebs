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
            <tr className={style.tr}>
              <td>Category</td>
              <td>Name</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Actions</td>
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
