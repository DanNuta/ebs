import React from 'react';
import { Product } from '../../types';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { VProduct } from 'components';
import style from './style.module.css';
import { BASE_URL } from './config';

interface IProps {
  data: Product[];
  pendign: boolean;
  error: string | null;
}

export const Home = () => {
  const { data, pendign, error }: IProps = useFetchProducts(`${BASE_URL}`);

  return (
    <div>
      {pendign && <h1>Loading...</h1>}

      <div>
        <table className={style.table}>
          <tr className={style.th}>
            <td className={style.td}>Category</td>
            <td className={style.td}>Name</td>
            <td className={style.td}>Price</td>
            <td className={style.td}>Actions</td>
          </tr>
          {data.map((item) => {
            return <VProduct key={item.name} item={item} />;
          })}
        </table>
      </div>
    </div>
  );
};
