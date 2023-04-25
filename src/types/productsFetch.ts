import { Product, Category } from './products';

interface IFetch {
  pendign: boolean;
  error: string | null;
}

export interface IFetchProducts extends IFetch {
  data: Product[];
}

export interface IFetchCategory extends IFetch {
  data: Category[];
}
