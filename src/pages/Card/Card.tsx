import React, { useContext } from 'react';
import { VCardItem } from '../../components';
import { ProductsContext } from '../../context/Products.context';
import { IContext, ICard } from '../../types';
import style from './style.module.css';

export const Card = () => {
  const { card } = useContext(ProductsContext) as IContext;

  //   const totalPrice = card.reduce(function (accumulator: number, curentValue: ICard) {
  //     return accumulator + curentValue.price;
  //   }, 0);

  const lengthCard = card.length > 0 ? true : false;

  return (
    <div>
      All products
      {lengthCard ? (
        <table className={style.table}>
          <tr className={style.th}>
            <td className={style.td}>Category</td>
            <td className={style.td}>Name</td>
            <td className={style.td}>Quantity</td>
            <td className={style.td}>Price</td>
            <td className={style.td}>Actions</td>
          </tr>

          {card.map((item) => {
            return <VCardItem key={item.id} item={item} />;
          })}
        </table>
      ) : (
        <h1>Nu exista produse</h1>
      )}
      {/* {lengthCard && <h1>Total: {totalPrice}</h1>} */}
    </div>
  );
};
