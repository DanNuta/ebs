import { BASE_URL_CATEGORY } from './config';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { Product, IFetchCategory } from '../../types';
import React from 'react';

interface IProps {
  products: Product[];
  onFilterFn: (name: string) => void;
  onSortProducts: (type: string) => void;
}

export const VFilter: React.FC<IProps> = ({ products, onFilterFn, onSortProducts }) => {
  const { data, pendign, error }: IFetchCategory = useFetchProducts(`${BASE_URL_CATEGORY}`);

  function filterCategoryFn(e: React.ChangeEvent<HTMLSelectElement>) {
    onFilterFn(e.target.value);
  }

  const filterItems = data.map((item) => item.id);
  const allFilterItems = ['all', ...filterItems];

  return (
    <div>
      {pendign && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}

      <div>
        <button onClick={() => onSortProducts('asc')}>Desc</button>
        <button onClick={() => onSortProducts('desc')}>Cresc</button>
      </div>

      <div>
        <select onChange={(e) => filterCategoryFn(e)} name="category">
          {allFilterItems.map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
