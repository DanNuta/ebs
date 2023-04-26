import { useState, useEffect } from 'react';

import { Product, IFetchProducts } from 'types';
import { useFetchProducts } from 'hooks/useFetchProducts';
import { VProduct, VFilter } from 'components';

import style from './style.module.css';
import { BASE_URL_PRODUCTS } from './config';

//outside folder/files

export const Home = () => {
  const [filterData, setFilterData] = useState<Product[] | []>([]);
  const { data, pendign, error }: IFetchProducts = useFetchProducts(`${BASE_URL_PRODUCTS}`);

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

  function changeQty(item: Product) {
    setFilterData((prev) => {
      return prev.map((p) => (p.id === item.id ? { ...item, quantity: p.quantity! + 1 } : p));
    });
  }

  console.log(data);

  function removeQty(item: Product) {
    setFilterData((prev) => {
      return prev.map((p) => (p.id === item.id ? { ...item, quantity: 0 } : p));
    });
  }

  useEffect(() => {
    const addQty: Product[] = data.map((item) => {
      item['quantity'] = 0;
      return item;
    });

    console.log('RENDER');

    setFilterData(addQty);
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
              <td>Quantity</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {filterData.map((item) => {
              return <VProduct key={item.name} item={item} onChangeQty={changeQty} onRemoveQty={removeQty} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
