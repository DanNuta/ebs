import { useState, useEffect } from 'react';

import { Product, IFetchProducts } from 'types';
import { useFetchProducts } from 'hooks/useFetchProducts';
import { VProduct, VFilter } from 'components';

import style from './style.module.css';

export const Home = () => {
  const [filterData, setFilterData] = useState<Product[] | []>([]);
  const { data, pendign, error }: IFetchProducts = useFetchProducts(`${process.env.REACT_APP_PRODUCTS_ENDPOINT}`);

  function filterProducts(name: string) {
    switch (name) {
      case 'all': {
        setFilterData((prev) => {
          return data;
        });
        return true;
      }

      case name: {
        const filterP = data.filter((p) => p.category?.id === name);
        setFilterData((prev) => {
          return filterP;
        });
        break;
      }

      default:
        return true;
    }

    const filterP = data.filter((p) => p.category?.id === name);
    setFilterData((prev) => {
      return filterP;
    });
  }

  function sortProducts(type: string) {
    if (type === 'asc') {
      setFilterData((prev) => {
        return [...prev].sort((a, b) => b.price - a.price);
      });
    }

    if (type === 'desc') {
      setFilterData((prev) => {
        return [...prev].sort((a, b) => a.price - b.price);
      });
    }
  }

  useEffect(() => {
    setFilterData(data);
  }, [data]);

  return (
    <div>
      {pendign && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}

      <VFilter onSortProducts={sortProducts} onFilterFn={filterProducts} products={data} />

      <div>
        <table className={style.table}>
          <thead>
            <tr className={style.tr}>
              <td>Category</td>
              <td>Name</td>
              <td>Price</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {filterData.map((item) => {
              return <VProduct key={item.name} item={item} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
