import React from 'react';

import { useFetchProducts } from 'hooks';
import { Product, IFetchCategory } from 'types';

interface IProps {
  products: Product[];
  onFilterFn: (name: string) => void;
  onSortProducts: (type: string) => void;
}

export const VFilter: React.FC<IProps> = ({ products, onFilterFn, onSortProducts }) => {
  const { data, pending, error }: IFetchCategory = useFetchProducts(`${process.env.REACT_APP_CATEGORY_ENDPOINT}`);

  function filterCategoryFn(e: React.ChangeEvent<HTMLSelectElement>) {
    onFilterFn(e.target.value);
  }

  const filterItems = data.map((item) => item.id);
  const allFilterItems = ['all', ...filterItems];

  return (
    <div>
      {pending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}

      <div>
        <button onClick={() => onSortProducts('asc')}>Asc</button>
        <button onClick={() => onSortProducts('desc')}>Desc</button>
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
